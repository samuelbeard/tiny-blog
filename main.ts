import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Tiny Blog",
  description: "This is my new blog.",
  cover: "https://deno-avatar.deno.dev/avatar/blog.svg",
  coverStyle: "avatar-rounded",
  author: "An author",
  background: "#f9f9f9",

  // middlewares: [
    
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
