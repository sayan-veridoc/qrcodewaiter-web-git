"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckOutlined, FormOutlined } from "@ant-design/icons";

export default function ItemTopFrom() {
  const [edit, setEdit] = useState<boolean>(false);
  function toggleEdit() {
    setEdit(!edit);
  }
  return (
    <form action="">
      <div className={styles.venueurlarea}>
        <h3 className={styles.weburlTitle}>Venue URL: www.qrcodewaiter.com/</h3>
        <div className={styles.weburlInfo}>
          <div className="">
            <Input
              id="VenueURL"
              name="VenueURL"
              type="text"
              defaultValue="SAT"
              readOnly={!edit}
              className="text-[#3c6bc7] w-24 font-semibold"
            />
          </div>
          <Button
            className="flex justify-center items-center gap-2"
            variant={"outline"}
            type="button"
            onClick={toggleEdit}
          >
            {edit ? (
              <>
                <CheckOutlined />
                <span>Save</span>
              </>
            ) : (
              <>
                <FormOutlined /> <span>Edit</span>
              </>
            )}
          </Button>
          <Button type="button">Preview</Button>
        </div>
      </div>
    </form>
  );
}
