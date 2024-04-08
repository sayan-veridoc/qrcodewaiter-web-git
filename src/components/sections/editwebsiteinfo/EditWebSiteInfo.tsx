"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import style from "./EditWebSiteInfo.module.scss";
import Image from "next/image";
export default function EditWebSiteInfo() {
  const [selectFile, SetSelectFile] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const buttonref = useRef<HTMLLabelElement>(null);
  const handelclick = () => {
    if (buttonref.current) {
      buttonref.current.click();
    }
  };

  const handelFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      SetSelectFile(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      SetSelectFile("");
      setPreviewImage(null);
    }
  };
  const handelClear = () => {
    SetSelectFile("");
    setPreviewImage(null);
  };

  return (
    <div className={style.maincontainer}>
      <h5>Edit Website Information</h5>
      <div className={style.formcontainer}>
        <h4>Logo</h4>
        <h5>Upload logo 500x500</h5>
        <div>
          <label id="icon1" ref={buttonref}>
            {selectFile ? selectFile : ""}
            <input
              type="file"
              alt="icon 1"
              id="icon1"
              className=""
              hidden
              onChange={handelFileSelect}
            />
          </label>
          <Button onClick={handelclick} className="rounded-none">
            Choose File
          </Button>
          <Button className="ml-3" onClick={handelClear}>
            Clear
          </Button>
        </div>
        <div>
          {previewImage && (
            <Image
              src={previewImage.toString()}
              alt="Preview"
              className="h-full"
              width={1000}
              height={1000}
            />
          )}
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
