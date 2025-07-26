"use client";

import { useState, useRef, useEffect } from "react";
import { UploadCloud, CheckCircle, XCircle, User } from "lucide-react";
import { uploadFileToServer } from "@/lib/uploadHelper";
import { getinformationuser } from "@/lib/auth";

function UploadFormPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    getinformationuser().then(setUser);
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setStatus("");
    setProgress(0);

    const result = await uploadFileToServer(file, (percent) => {
      setProgress(percent);
    });

    if (result.success) {
      setStatus("success");
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
    } else {
      setStatus(result.error);
    }
    setIsUploading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-16">
      <div className="mb-6">
        {user ? (
          <div className="p-4 bg-blue-100 rounded text-blue-800 flex flex-col shadow-sm">
            <h2 className="text-base font-semibold mb-2">
              🔐 Decode Cookie: Basic User Information
            </h2>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-semibold">Welcome, {user.name}</span>
            </div>
            <div className="text-sm text-blue-700 ml-7 mt-1">{user.email}</div>
          </div>
        ) : (
          <div className="p-4 bg-red-100 rounded text-red-700 shadow-sm">
            Not logged in
          </div>
        )}
      </div>

      <form
        onSubmit={handleUpload}
        className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <UploadCloud className="w-6 h-6 text-blue-500" />
          Upload Your File
        </h2>

        <div className="mb-4">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Choose file (max 120MB)
          </label>
          <input
            ref={inputRef}
            id="file-upload"
            type="file"
            accept="*/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={isUploading}
          />
        </div>

        {isUploading && (
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isUploading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isUploading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          {isUploading ? `Uploading... ${progress}%` : "Upload"}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 mt-4 text-green-600 font-medium">
            <CheckCircle className="w-5 h-5" />
            Upload success!
          </div>
        )}

        {status && status !== "success" && (
          <div className="flex items-center gap-2 mt-4 text-red-600 font-medium">
            <XCircle className="w-5 h-5" />
            {status}
          </div>
        )}
      </form>
    </div>
  );
}

export default UploadFormPage;
