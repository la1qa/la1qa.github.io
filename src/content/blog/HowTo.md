# How To Make a Blog Post

## Step 1

Add post metadat to `index.ts` like so;

```ts
  {
    title: "Hello World",
    date: "2026-01-23",
    slug: "2026-01-hello",
  }
```

`slug` is the name of the file you will have your post content in. Name it with the shown format.

## Step 2

Create file `slug.md` in `public/blog/` with post content in Markdown form.

## Step 3

Check deployment works correctly and enjoy!