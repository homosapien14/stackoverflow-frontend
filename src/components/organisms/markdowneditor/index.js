"use client";
import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./markdown.css";
const MarkdownEditor = ({ onChange }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    onChange(markdownContent);
  }, [markdownContent, onChange]);

  const handleTextAreaChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  const togglePreviewMode = (e) => {
    e.preventDefault();
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="markdown-editor">
      <div className="editor-header">
        <button className="rounded-md w-10" onClick={togglePreviewMode}>
          {isPreviewMode ? "Edit" : "Preview"}
        </button>
      </div>
      <div className={`editor-content ${isPreviewMode ? "hidden" : ""}`}>
        <textarea
          ref={textAreaRef}
          value={markdownContent}
          onChange={handleTextAreaChange}
          placeholder="Write your Details here..."
        />
      </div>
      <div className={`preview-content ${isPreviewMode ? "" : "hidden"}`}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
