"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Tooltip,
  ScrollShadow,
  Textarea,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";
/*
 * Need to dynamically import the components below to get rid of this server warning:
 * WARNING: Panel defaultSize prop recommended to avoid layout shift after server rendering
 */
import dynamic from "next/dynamic";
const ResizablePanelGroup = dynamic(
  () =>
    import("@/components/ui/resizable").then((mod) => mod.ResizablePanelGroup),
  { ssr: false },
);
const ResizablePanel = dynamic(
  () => import("@/components/ui/resizable").then((mod) => mod.ResizablePanel),
  { ssr: false },
);
const ResizableHandle = dynamic(
  () => import("@/components/ui/resizable").then((mod) => mod.ResizableHandle),
  { ssr: false },
);

import DocumentsPage from "./documents";

import PromptInput from "@/components/prompt-input";

export default function Home() {
  const ideas = [
    {
      title: "Make it shorter",
      description: "change the length of the summary",
    },
    {
      title: "Bullet points",
      description: "make it easy and fast to read",
    },
    {
      title: "Color highlights",
      description: "use color to reference back to the original text",
    },
  ];
  const [prompt, setPrompt] = useState<string>("");

  return (
    <>
      <div className="flex h-32 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Parallel Ai - Document Summarizer App
        </h1>
        <Card>
          <CardBody>
            {/* Include the DocumentsPage component */}
            {/* <DocumentsPage /> */}
          </CardBody>
        </Card>
      </div>
      <div className="flex h-dvh w-full">
        <div className="w-full flex-1 flex-col p-4">
          <main className="h-full w-full overflow-visible">
            <div className="m-12 flex overflow-y-hidden border-medium border-default-200 p-0 sm:rounded-large">
              <div className="flex w-full">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel className="p-8">
                    <div className="flex w-full flex-col gap-4">
                      <form className="flex h-full w-full flex-col items-start justify-between rounded-medium bg-default-100 transition-colors hover:bg-default-200/70">
                        <PromptInput
                          classNames={{
                            inputWrapper: "!bg-transparent shadow-none",
                            innerWrapper: "relative",
                            input: "pt-1 pl-2 pb-6 !pr-10 text-medium",
                          }}
                          minRows={24}
                          maxRows={48}
                          radius="lg"
                          value={prompt}
                          variant="faded"
                          onValueChange={setPrompt}
                        />
                        <div className="mt-4 flex w-full items-center justify-between gap-2 overflow-scroll px-4 pb-4">
                          <div className="flex w-full gap-1 md:gap-3">
                            <Button
                              size="sm"
                              startContent={
                                <Icon
                                  className="text-default-500"
                                  icon="solar:paperclip-linear"
                                  width={18}
                                />
                              }
                              variant="flat"
                            >
                              Upload Doc
                            </Button>
                          </div>
                          <p className="py-1 text-tiny text-default-400">
                            {prompt.length}/1500
                          </p>
                          <Tooltip showArrow content="Summarize">
                            <Button
                              isIconOnly
                              color={!prompt ? "default" : "primary"}
                              isDisabled={!prompt}
                              radius="lg"
                              size="sm"
                              variant="solid"
                            >
                              <Icon
                                className={cn(
                                  "[&>path]:stroke-[2px]",
                                  !prompt
                                    ? "text-default-600"
                                    : "text-primary-foreground",
                                )}
                                icon="solar:arrow-right-linear"
                                width={20}
                              />
                            </Button>
                          </Tooltip>
                        </div>
                      </form>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel className="p-8">
                    <ScrollShadow
                      hideScrollBar
                      className="flex flex-nowrap gap-2"
                      orientation="horizontal"
                    >
                      <div className="flex gap-2">
                        {ideas.map(({ title, description }, index) => (
                          <Button
                            key={index}
                            className="flex h-14 flex-col items-start gap-0"
                            variant="flat"
                          >
                            <p>{title}</p>
                            <p className="text-default-500">{description}</p>
                          </Button>
                        ))}
                      </div>
                    </ScrollShadow>
                    <div className="mt-8 flex h-full">
                      <Textarea
                        aria-label="results"
                        className="min-h-[40px] w-full"
                        minRows={24}
                        maxRows={54}
                        placeholder="Hit summarize arrow button to show results here"
                        radius="lg"
                        variant="faded"
                      />
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
