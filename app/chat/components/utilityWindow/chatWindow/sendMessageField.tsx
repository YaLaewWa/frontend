"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { MessageInterface } from "@/app/chat/types/Chat";

const formSchema = z.object({
  message: z.string().min(1),
});


interface SendMessageFieldProps{
  updateFunction: Dispatch<SetStateAction<MessageInterface[]>>
  messageArray: MessageInterface[]
}
export function SendMessageField({updateFunction, messageArray} : SendMessageFieldProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFunction([...messageArray,{
      sender: "Friend0",
      timestamp: new Date,
      message: values.message
    }])
    form.reset({message:""})
  }
  return (
    <div className="h-[75px] w-[calc(100vw-256px)] fixed bg-white">
      <div className="px-[10px] h-full mt-[10px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-1">
              <div className="w-[100%]">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Chat..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="rounded-full">
                <SendHorizonal />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
