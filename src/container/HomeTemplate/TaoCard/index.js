import { useRef } from "react";
import domtoimage from "dom-to-image";

export default function TaoCard() {
  function exportToPng(dom) {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
  function saveToPng(dom) {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
  const container = useRef(null);

  return (
    <div className="TaoCard mt-5 pt-5">
      <button
        className="btn btn-success"
        onClick={() => exportToPng(container.current)}
      >
        export
      </button>
      <button
        className="btn btn-warning"
        onClick={() => saveToPng(container.current)}
      >
        Dowload
      </button>
      <div ref={container} className="bg-light">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
