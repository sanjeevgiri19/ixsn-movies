
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const SketchCanvas = () => {
  const canvasRef = useRef();
  const [eraserMode, seteraserMode] = useState(false);
  const [strokeWidth, setstrokeWidth] = useState(6);
  const [strokeColor, setstrokeColor] = useState("#6556cd");
  const [canvasColor, setCanvasColor] = useState("#DEDEDE");

  function handleUndo() {
    canvasRef?.current?.undo();
  }
  function handleRedo() {
    canvasRef?.current?.redo();
  }

  function clearCanvas() {
    canvasRef?.current.clearCanvas();
  }

  function resetCanvas() {
    canvasRef?.current.resetCanvas();
  }

  const handleExport = async (format) => {
    const data = await canvasRef?.current.exportImage(format);
    console.log(data);

    // Create a download link
    const link = document.createElement("a");
    link.href = data;
    link.download = `canvas.${format}`; // Set the filename
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };
  function toggleEraserButon() {
    seteraserMode(!eraserMode);
  }

  const handleStrokeColor = (e) => {
    setstrokeColor(e.target.value);
  };
  const handleStrokeWidth = (e) => {
    setstrokeWidth(e.target.value, 6);

    // setstrokeWidth(e.target.value)
  };
  const handleCanvasColor = (e) => {
    setCanvasColor(e.target.value);
    resetCanvas();
  };

  // stroke color, stroke width, canvas color change

  return (
    <div className=" flex relative flex-col justify-center items-center py-20 ">
      <h1 className="text-xl font-semibold text-zinc-400">Draw your Imagination</h1>
      <h1 className="text-lg font-semibold text-zinc-500">Try to potrait your favourite actors, characters, scene or anything from your fav. movie</h1>
      <ReactSketchCanvas
        style={{
          border: "2px solid gray",
          borderRadius: "0.2rem",
        }}
        ref={canvasRef}
        width="80vw"
        height="70vh"
        strokeColor={eraserMode ? canvasColor : strokeColor}
        strokeWidth={strokeWidth}
        canvasColor={canvasColor}
        eraserWidth={6}
        withErase={eraserMode}
      />
      <div className="flex absolute left-40 bottom-10 gap-5 ">
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={handleUndo}
        >
          Undo
        </button>
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={handleRedo}
        >
          Redo
        </button>
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={resetCanvas}
        >
          Reset
        </button>
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={() => handleExport("png")}
        >
          Export
        </button>
        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={() => handleExport("jpeg")}
        >
          Export
        </button>

        <input
          type="color"
          value={strokeColor}
          onChange={handleStrokeColor}
          className="border border-zinc-700 rounded w-16"
        />

        <input
          type="number"
          min="1"
          max="50"
          value={strokeWidth}
          onChange={handleStrokeWidth}
          className="outline-none text-xl  w-16 rounded"
        />

        <input
          type="color"
          value={canvasColor}
          onChange={handleCanvasColor}
          className="outline-none w-16 rounded"
        />
        {/* stroke color, stroke width, canvas color */}

        <button
          className=" border border-zinc-700 px-3 py-1 rounded-md text-zinc-500 font-semibold text-[17px]"
          onClick={toggleEraserButon}
        >
          {eraserMode ? "Draw" : "Eraser"}
        </button>
      </div>
    </div>
  );
};

export default SketchCanvas;



