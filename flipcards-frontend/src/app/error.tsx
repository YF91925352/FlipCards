"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface ErrorProps {
  error: Error;
}

interface Message {
  text: string;
  variant: "h2" | "h3" | "h4";
  color: string;
  mt?: number;
}

const messages: Message[] = [
  { text: "Oops!", variant: "h2", color: "text-blue-950" },
  { text: "Something went wrong", variant: "h3", color: "text-amber-600" },
  {
    text: "Don't worry, please try again!",
    variant: "h4",
    color: "text-blue-950",
    mt: 5,
  },
  {
    text: "Our team is always here to help",
    variant: "h4",
    color: "text-blue-950",
    mt: 2,
  },
];

const Error = ({ error }: ErrorProps) => {
  return (
    <Box className="flex justify-center items-center gap-6 px-4 pt-10 sm:py-12 lg:px-4">
      <Box className="hidden md:block">
        <Image
          src="/error-left.png"
          alt="page not found"
          width={330}
          height={300}
        />
      </Box>
      <Box>
        {messages.map((msg) => (
          <Typography
            key={msg.text}
            variant={msg.variant}
            className={`${msg.color} ${msg.mt ? `mt-${msg.mt}` : ""}`}
          >
            {msg.text}
          </Typography>
        ))}
        <Box className="flex justify-start items-end gap-5 mt-5">
          <Image
            src="/error-right.gif"
            alt="contact us"
            width={150}
            height={120}
          />
          <Box className="flex justify-center items-center gap-5 pb-3">
            <Button
              variant="contained"
              className="bg-amber-600"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
            <Link href="/">
              <Button variant="contained" className="bg-amber-600">
                Contact Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Error;
