"use client";


interface LogoControlPanelProps {
  position: { x: number; y: number };
  size: number;
  onChange: (position: { x: number; y: number }, size: number) => void;
  containerSize: { width: number; height: number };
}

export function LogoControlPanel({
  position,
  size,
  onChange,
  containerSize,
}: LogoControlPanelProps) {
  const handleSizeChange = (newSize: number) => {
    const newX = Math.min(position.x, containerSize.width - newSize);
    const newY = Math.min(position.y, containerSize.height - newSize);

    onChange({ x: newX, y: newY }, newSize);
  };

  const handlePositionChange = (axis: "x" | "y", value: number) => {
    const newPosition = { ...position };
    newPosition[axis] = Number(value);

    newPosition.x = Math.max(
      0,
      Math.min(newPosition.x, containerSize.width - size)
    );
    newPosition.y = Math.max(
      0,
      Math.min(newPosition.y, containerSize.height - size)
    );

    onChange(newPosition, size);
  };

  return (
    <div className="w-full max-w-[699px] p-4 bg-white border rounded-lg mt-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="logo-size" className="block text-sm font-medium mb-2">
            Logo Size
          </label>
          <div className="flex items-center gap-3">
            <input
              id="logo-size"
              type="range"
              min="20"
              max="200"
              value={size}
              onChange={(e) => handleSizeChange(Number(e.target.value))}
              className="flex-1 cursor-pointer"
            />
            <span className="text-sm font-medium w-16 text-right">
              {Math.round(size)}px
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Position</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="logo-x"
                className="block text-xs text-gray-500 mb-1"
              >
                X Position
              </label>
              <div className="flex items-center">
                <input
                  id="logo-x"
                  type="number"
                  min="0"
                  max={containerSize.width - size}
                  value={Math.round(position.x)}
                  onChange={(e) =>
                    handlePositionChange("x", Number(e.target.value))
                  }
                  className="w-full p-1.5 border rounded text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="logo-y"
                className="block text-xs text-gray-500 mb-1"
              >
                Y Position
              </label>
              <div className="flex items-center">
                <input
                  id="logo-y"
                  type="number"
                  min="0"
                  max={containerSize.height - size}
                  value={Math.round(position.y)}
                  onChange={(e) =>
                    handlePositionChange("y", Number(e.target.value))
                  }
                  className="w-full p-1.5 border rounded text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3">
        <div className="text-xs text-gray-500">
          Tip: You can drag the logo or use the resize handle in the
          bottom-right corner of the logo
        </div>
      </div>
    </div>
  );
}
