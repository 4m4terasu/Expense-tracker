CREATE TABLE "expenses" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"amount" numeric NOT NULL,
	"category" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"note" text
);
