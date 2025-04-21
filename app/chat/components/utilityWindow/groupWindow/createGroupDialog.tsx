'use client';
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
import { Plus } from 'lucide-react';
import React from 'react';

export const CreateGroupDialog = () => {
  async function onSubmit() {
    console.log('submit');
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            Create group
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Create group</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
