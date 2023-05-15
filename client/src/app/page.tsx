"use client"

import { getPosts } from '../api/post.api'
import { useEffect, useState } from 'react';

function index() {
  useEffect(() => {
    async function getAllPosts() {
      const res = await getPosts();
      console.log(res);
    }

    getAllPosts();
  }, []);

  return <div>index</div>;
}

export default index;
