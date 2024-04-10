import React from 'react';
import 'react-step-progress-bar/styles.css';

export function StepProgressBar(props) {
  let prog = (props.step - 1) * 25;
  return (
    <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-full bg-green-700 transition-all"
        style={{ width: `${prog}%` }}
      ></div>
    </div>
  );
}
