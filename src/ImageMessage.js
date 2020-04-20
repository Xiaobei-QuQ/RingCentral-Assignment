import React, { useState, useEffect } from "react";

function ImageMessage(props) {
  const { src } = props;
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const maxWidth = 350;
  const maxHeight = 200;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const parseResult = /_([0-9]+)x([0-9]+)/.exec(src);
      const natureWidth = +parseResult[1];
      const naturehHeight = +parseResult[2];
      let scale = 1;
      if (natureWidth * scale > maxWidth) {
        scale = maxWidth / natureWidth;
      }
      if (naturehHeight * scale > maxHeight) {
        scale = maxHeight / naturehHeight;
      }

      setWidth(natureWidth * scale);
      setHeight(naturehHeight * scale);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div className="imageMessage">
        <img
          className="image"
          src={src}
          alt="图片"
          width={width}
          height={height}
          referrerPolicy="no-referrer"
        />
      </div>
    </>
  );
}

export default React.memo(ImageMessage);
