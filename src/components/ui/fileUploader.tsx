import React, { useRef, useState } from "react";
import { CommonDialogBox } from "../CommonDialog";
import Image from "next/image";
import { DocumentUploadIcon } from "@root/assets";
import { RHFTextField } from "../hook-form";
const FileUploader = ({ setOpen, open }: any) => {
  const [files, setFiles] = useState<any>({});
  const [isDraggedOver, setIsDraggedOver] = useState<any>(false);
  const hiddenInputRef = useRef<any>(null);

  const addFile = (file: any) => {
    const isImage = file.type.match("image.*");
    const objectURL = URL.createObjectURL(file);

    setFiles((prevFiles: any) => ({
      ...prevFiles,
      [objectURL]: file,
    }));
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDraggedOver(false);

    for (const file of e.dataTransfer.files) {
      addFile(file);
    }
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: any) => {
    for (const file of e.target.files) {
      addFile(file);
    }
  };

  const handleFileDelete = (objectURL: any) => {
    const newFiles = { ...files };
    delete newFiles[objectURL];
    setFiles(newFiles);
  };

  const handleSubmit = () => {
    // Handle file submission here
    console.log(files);
  };
  const openFileInput = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef?.current?.click();
    }
  };
  return (
    <CommonDialogBox
      styleContent={`bg-white dark:bg-grayScale-secondary sm:min-w-[600px] h-[95vh] overflow-y-auto data-[state=open]:right-6 top-6 bottom-6`}
      open={open}
      setOpen={setOpen}
    >
      <div className="w-full">
        <h1 className="font-bold text-f20">Import customers by CSV</h1>
        <div>
          {/* file upload modal */}
          <div
            aria-label="File Upload Modal"
            className="relative h-full "
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragEnter}
          >
            <div className="flex flex-col space-y-4">
              <div className="border-dashed border-[2px] rounded-[10px] border-[#CBD5E0] py-12 flex flex-col justify-center items-center">
                <Image src={DocumentUploadIcon} alt="" />
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                  ref={hiddenInputRef}
                  onChange={handleFileInputChange}
                />
                <button
                  id="button"
                  className="font-normal text-f14 text-primary"
                  onClick={openFileInput}
                >
                  Select a CSV file to upload
                </button>
                <h1 className="text-f12 text-customGray">
                  or drag and drop it here
                </h1>
              </div>
              <div className="">
                <label
                  htmlFor="upload-url"
                  className="text-f16 font-bold w-full"
                >
                  Or upload from a URL
                </label>
                <input
                  placeholder="Add the file URL"
                  type="text"
                  name=""
                  id="upload-url"
                  className="w-full text-f16 p-2 outline-primary border-customGray border rounded-[4px]"
                />
              </div>
              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>

              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                {Object.keys(files).map((objectURL) => (
                  <li
                    key={objectURL}
                    className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24"
                  >
                    <article
                      tabIndex={0}
                      className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm"
                    >
                      <img
                        alt="upload preview"
                        className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed"
                        src={URL.createObjectURL(files[objectURL])}
                      />

                      <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                        <h1 className="flex-1 group-hover:text-blue-800">
                          {files[objectURL].name}
                        </h1>
                        <div className="flex">
                          <span className="p-1 text-blue-800">
                            <i>
                              <svg
                                className="fill-current w-4 h-4 ml-auto pt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                              </svg>
                            </i>
                          </span>
                          <p className="p-1 size text-xs text-gray-700">
                            {files[objectURL].size > 1024
                              ? files[objectURL].size > 1048576
                                ? Math.round(files[objectURL].size / 1048576) +
                                  "mb"
                                : Math.round(files[objectURL].size / 1024) +
                                  "kb"
                              : files[objectURL].size + "b"}
                          </p>
                          <button
                            className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800"
                            onClick={() => handleFileDelete(objectURL)}
                          >
                            <svg
                              className="pointer-events-none fill-current w-4 h-4 ml-auto"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="pointer-events-none"
                                d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                              />
                            </svg>
                          </button>
                        </div>
                      </section>
                    </article>
                  </li>
                ))}
                {Object.keys(files).length === 0 && (
                  <li
                    id="empty"
                    className="h-full w-full text-center flex flex-col items-center justify-center"
                  >
                    <img
                      className="mx-auto w-32"
                      src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                      alt="no data"
                    />
                    <span className="text-small text-gray-500">
                      No files selected
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                onClick={handleSubmit}
              >
                Upload now
              </button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                onClick={() => {
                  setFiles({});
                }}
              >
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </CommonDialogBox>
  );
};

export default FileUploader;
