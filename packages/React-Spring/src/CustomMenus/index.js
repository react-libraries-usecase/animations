import React, { useRef } from 'react';
import { useSpring, a, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import clamp from 'lodash-es/clamp';
import './style.css';

const items = ['save item', 'open item', 'share item', 'delete item', 'cancel'];
const height = items.length * 60 + 80;

function App() {
  const sheetRef = useRef();
  const draggingRef = useRef(false);
  const [{ y }, set] = useSpring(() => ({ y: height }));

  const open = ({ canceled }) => {
    // when the user opens the sheet, we disable the body from scrolling
    disableBodyScroll(sheetRef.current);
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    set({ y: 0, config: canceled ? config.wobbly : config.stiff });
  };
  const close = () => {
    // when the user opens the sheet, we enable the body scroll
    clearAllBodyScrollLocks();
    set({ y: height, config: config.stiff });
  };

  const bind = useDrag(
    ({
      first,
      last,
      vxvy: [, vy],
      movement: [, my],
      memo = y.getValue(),
      cancel,
      canceled
    }) => {
      let newY = memo + my;

      if (first) draggingRef.current = false;
      // if this is not the first or last frame, it's a moving frame
      // then it means the user is dragging
      else if (!!last) draggingRef.current = true;
      // adds friction when dragging the sheet upward
      // the more the user drags up, the more friction
      if (newY < 0) newY = newY / (1 - newY * 0.005);

      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (newY < -120) cancel();

      // when the user releases the sheet, we check whether it passed
      // the treshold for it to close, or if we reset it to its open positino
      if (last) newY > height * 0.75 || vy > 0.5 ? close() : open({ canceled });
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else set({ y: clamp(newY, -200, height), config: config.stiff });
      return memo;
    }
  );

  const overlayBackground = y.interpolate(
    [0, height],
    ['#00000060', '#00000000'],
    'clamp'
  );
  const overlayBlur = y.interpolate(
    [0, height],
    ['blur(20px)', 'blur(0px)'],
    'clamp'
  );
  const display = y.interpolate(py => (py < height ? 'block' : 'none'));
  return (
    <>
      <a.div
        className="bg"
        style={{
          transform: y.interpolate(
            [0, height],
            ['translateY(-8%) scale(1.16)', 'translateY(0px) scale(1)'],
            'clamp'
          )
        }}
      >
        <img
          src="https://images.pexels.com/photos/1170831/pexels-photo-1170831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
          alt=""
        />
        <a.div
          className="overlay"
          style={{
            display,
            background: overlayBackground,
            WebkitBackdropFilter: overlayBlur,
            backdropFilter: overlayBlur
          }}
          onClick={close}
        />
      </a.div>
      <div className="action-btnjj" onClick={open} />
      <a.div
        ref={sheetRef}
        className="sheet"
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
      >
        {items.map(entry => (
          <div
            key={entry}
            onClick={() => !draggingRef.current && close()}
            children={entry}
          />
        ))}
      </a.div>
    </>
  );
}

export default App;
