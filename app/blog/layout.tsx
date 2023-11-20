import React from "react";
import type { Metadata } from 'next'


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}
