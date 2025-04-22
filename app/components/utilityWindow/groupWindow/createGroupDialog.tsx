'use client';
import { createGroup } from '@/app/actions/createGroup';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheckBig, Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  groupName: z.string().min(1, { message: 'Group name is required' }),
});

export const CreateGroupDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await createGroup(values.groupName);
    if (!res) {
      toast(
        <div className="flex gap-3 items-center">
          <CircleCheckBig className="text-green-500" />
          <p className="text-base">Group created</p>
        </div>
      );
      setOpen(false);
      form.reset();
    } else {
      toast.error('Error', {
        description: res.message,
      });
    }
  }

  return (
    <div>
      <Form {...form}>
        <Dialog
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen);
            if (!isOpen) {
              form.reset(); // Reset form when dialog is closed
            }
          }}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus />
              Create group
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="w-full max-w-3xl flex flex-col gap-5"
            >
              <DialogHeader className="items">
                <DialogTitle className="text-2xl text-start">
                  Create group
                </DialogTitle>
                <DialogDescription></DialogDescription>
                <FormField
                  control={form.control}
                  name="groupName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Group name
                      </FormLabel>
                      <FormControl>
                        <Input required {...field} />
                      </FormControl>
                      <FormDescription className="text-start">
                        This is your group name.
                      </FormDescription>
                      <FormMessage className="text-start" />
                    </FormItem>
                  )}
                />
              </DialogHeader>
              <DialogFooter className="items-end">
                <Button type="submit" className="w-min">
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </Form>
    </div>
  );
};
