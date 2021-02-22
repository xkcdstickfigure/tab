import { useState, useEffect } from "react";

export const Footer = ({ hp, ext }) => {
  const [text, setText] = useState();
  useEffect(
    () =>
      setText(
        `Have ${adjectives[Math.floor(Math.random() * adjectives.length)]} day!`
      ),
    []
  );

  return (
    <div className="mx-auto max-w-3xl border-t-2 border-gray-200 p-5 text-gray-600 text-xs font-light">
      <table>
        <tbody>
          <tr>
            <td className="w-full">Tab, by Alles</td>
            <td className="whitespace-nowrap text-right">hp: {hp}</td>
          </tr>
          <tr>
            <td className="w-full">{text}</td>
            <td className="whitespace-nowrap text-right">ext: {ext}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const adjectives = [
  "an awesome",
  "an amazing",
  "an epic",
  "an adventurous",
  "an excellent",
  "an incredible",
  "a fabulous",
  "a fantastic",
  "a great",
  "a happy",
  "a wonderful",
  "a splendid",
  "a super",
];
