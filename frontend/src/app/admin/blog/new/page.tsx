"use client";

import { PostForm } from "@/components/admin/post-form";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl text-brand-900 md:text-4xl">Új cikk</h1>
      <PostForm />
    </div>
  );
}
