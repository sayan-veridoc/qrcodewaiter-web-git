"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./index.module.scss";
import Image from "next/image";
import { cards } from "@/utils/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {};

export default function CardSelection({}: Props) {
  const [template, setTemplate] = useState<number | null>(null);
  const router = useRouter();

  const toggleTemplate = (value: number) => {
    if (template === value) {
      setTemplate(null);
    } else {
      setTemplate(value);
      toast.success(`Template ${value} is selected!`, {
        style: {
          background: "#333",
          color: "white",
          borderRadius: 5,
        },
      });
      setTimeout(() => {
        router.push("/dashboard/manage");
      }, 2000);
    }
  };
  //   console.log(template);
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-3 gap-4">
          {cards.map((item) => (
            <div className="relative" key={item.key}>
              <div className={styles.screen}>
                <Image alt={""} src={item.src} width={200} height={200} />
              </div>
              <div
                style={{
                  backgroundColor: template === item.key ? "#007bff" : "",
                  transition: "ease-in-out 0.3s all",
                }}
                className={styles.btm_content}
                id="toggle-click"
                onClick={() => toggleTemplate(item.key)}
              >
                <h3>
                  {template === item.key ? "Selected" : "Select this template"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
