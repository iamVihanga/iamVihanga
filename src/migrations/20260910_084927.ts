import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_project_type" AS ENUM('personal', 'agency', 'client', 'collaboration');
  CREATE TYPE "public"."enum_projects_stage" AS ENUM('concept', 'in-progress', 'completed', 'maintained', 'archived');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_project_type" AS ENUM('personal', 'agency', 'client', 'collaboration');
  CREATE TYPE "public"."enum__projects_v_version_stage" AS ENUM('concept', 'in-progress', 'completed', 'maintained', 'archived');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_journal_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__journal_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_testimonials_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_clients_kind" AS ENUM('client', 'agency', 'partner');
  CREATE TYPE "public"."enum_contact_socials_platform" AS ENUM('github', 'linkedin', 'x', 'youtube', 'instagram', 'dribbble', 'medium', 'devto', 'discord', 'other');
  CREATE TYPE "public"."enum_contact_availability" AS ENUM('available', 'open-to-work', 'booked');
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"excerpt" varchar,
  	"content" jsonb,
  	"cover_image_id" integer,
  	"role" varchar,
  	"team_size" numeric,
  	"links_live_url" varchar,
  	"links_repo_url" varchar,
  	"links_case_study_url" varchar,
  	"project_type" "enum_projects_project_type" DEFAULT 'personal',
  	"client_id" integer,
  	"agency_id" integer,
  	"stage" "enum_projects_stage" DEFAULT 'completed',
  	"start_date" timestamp(3) with time zone,
  	"completed_date" timestamp(3) with time zone,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"technologies_id" integer,
  	"tech_stacks_id" integer,
  	"skills_id" integer,
  	"project_categories_id" integer
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_title" varchar,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_content" jsonb,
  	"version_cover_image_id" integer,
  	"version_role" varchar,
  	"version_team_size" numeric,
  	"version_links_live_url" varchar,
  	"version_links_repo_url" varchar,
  	"version_links_case_study_url" varchar,
  	"version_project_type" "enum__projects_v_version_project_type" DEFAULT 'personal',
  	"version_client_id" integer,
  	"version_agency_id" integer,
  	"version_stage" "enum__projects_v_version_stage" DEFAULT 'completed',
  	"version_start_date" timestamp(3) with time zone,
  	"version_completed_date" timestamp(3) with time zone,
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"technologies_id" integer,
  	"tech_stacks_id" integer,
  	"skills_id" integer,
  	"project_categories_id" integer
  );
  
  CREATE TABLE "journal" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"excerpt" varchar,
  	"content" jsonb,
  	"hero_image_id" integer,
  	"author_id" integer,
  	"published_at" timestamp(3) with time zone,
  	"series_id" integer,
  	"series_order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_journal_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "journal_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer,
  	"technologies_id" integer,
  	"journal_categories_id" integer
  );
  
  CREATE TABLE "_journal_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_content" jsonb,
  	"version_hero_image_id" integer,
  	"version_author_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_series_id" integer,
  	"version_series_order" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__journal_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_journal_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer,
  	"technologies_id" integer,
  	"journal_categories_id" integer
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_role" varchar,
  	"author_avatar_id" integer,
  	"client_id" integer,
  	"project_id" integer,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_testimonials_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_testimonials_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_quote" varchar,
  	"version_author_name" varchar,
  	"version_author_role" varchar,
  	"version_author_avatar_id" integer,
  	"version_client_id" integer,
  	"version_project_id" integer,
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__testimonials_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "technologies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"website" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "technologies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE "tech_stacks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tech_stacks_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"technologies_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "project_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "journal_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "series" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"cover_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "clients" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"logo_id" integer,
  	"kind" "enum_clients_kind" DEFAULT 'client' NOT NULL,
  	"industry" varchar,
  	"website" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"job_title" varchar,
  	"avatar_id" integer,
  	"bio" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"credit" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"journal_id" integer,
  	"testimonials_id" integer,
  	"skills_id" integer,
  	"technologies_id" integer,
  	"tech_stacks_id" integer,
  	"project_categories_id" integer,
  	"journal_categories_id" integer,
  	"series_id" integer,
  	"clients_id" integer,
  	"users_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contact_addresses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"line1" varchar NOT NULL,
  	"line2" varchar,
  	"city" varchar,
  	"state" varchar,
  	"postal_code" varchar,
  	"country" varchar,
  	"map_url" varchar
  );
  
  CREATE TABLE "contact_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_contact_socials_platform" NOT NULL,
  	"url" varchar NOT NULL,
  	"handle" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"availability" "enum_contact_availability" DEFAULT 'available',
  	"availability_note" varchar,
  	"booking_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar NOT NULL,
  	"tagline" varchar,
  	"short_bio" varchar,
  	"logo_id" integer,
  	"logo_dark_id" integer,
  	"favicon_id" integer,
  	"default_og_image_id" integer,
  	"resume_id" integer,
  	"copyright" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "projects" ADD CONSTRAINT "projects_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_agency_id_clients_id_fk" FOREIGN KEY ("agency_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_tech_stacks_fk" FOREIGN KEY ("tech_stacks_id") REFERENCES "public"."tech_stacks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_project_categories_fk" FOREIGN KEY ("project_categories_id") REFERENCES "public"."project_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_client_id_clients_id_fk" FOREIGN KEY ("version_client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_agency_id_clients_id_fk" FOREIGN KEY ("version_agency_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_tech_stacks_fk" FOREIGN KEY ("tech_stacks_id") REFERENCES "public"."tech_stacks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_project_categories_fk" FOREIGN KEY ("project_categories_id") REFERENCES "public"."project_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal" ADD CONSTRAINT "journal_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal" ADD CONSTRAINT "journal_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal" ADD CONSTRAINT "journal_series_id_series_id_fk" FOREIGN KEY ("series_id") REFERENCES "public"."series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal_rels" ADD CONSTRAINT "journal_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_rels" ADD CONSTRAINT "journal_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_rels" ADD CONSTRAINT "journal_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_rels" ADD CONSTRAINT "journal_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_rels" ADD CONSTRAINT "journal_rels_journal_categories_fk" FOREIGN KEY ("journal_categories_id") REFERENCES "public"."journal_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_v" ADD CONSTRAINT "_journal_v_parent_id_journal_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journal"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_v" ADD CONSTRAINT "_journal_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_v" ADD CONSTRAINT "_journal_v_version_author_id_users_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_v" ADD CONSTRAINT "_journal_v_version_series_id_series_id_fk" FOREIGN KEY ("version_series_id") REFERENCES "public"."series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_v_rels" ADD CONSTRAINT "_journal_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_journal_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_v_rels" ADD CONSTRAINT "_journal_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_v_rels" ADD CONSTRAINT "_journal_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_v_rels" ADD CONSTRAINT "_journal_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_v_rels" ADD CONSTRAINT "_journal_v_rels_journal_categories_fk" FOREIGN KEY ("journal_categories_id") REFERENCES "public"."journal_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_parent_id_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_author_avatar_id_media_id_fk" FOREIGN KEY ("version_author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_client_id_clients_id_fk" FOREIGN KEY ("version_client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_project_id_projects_id_fk" FOREIGN KEY ("version_project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "skills" ADD CONSTRAINT "skills_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "technologies" ADD CONSTRAINT "technologies_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "technologies_rels" ADD CONSTRAINT "technologies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "technologies_rels" ADD CONSTRAINT "technologies_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tech_stacks" ADD CONSTRAINT "tech_stacks_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tech_stacks_rels" ADD CONSTRAINT "tech_stacks_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tech_stacks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tech_stacks_rels" ADD CONSTRAINT "tech_stacks_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tech_stacks_rels" ADD CONSTRAINT "tech_stacks_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "project_categories" ADD CONSTRAINT "project_categories_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal_categories" ADD CONSTRAINT "journal_categories_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "series" ADD CONSTRAINT "series_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_journal_fk" FOREIGN KEY ("journal_id") REFERENCES "public"."journal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tech_stacks_fk" FOREIGN KEY ("tech_stacks_id") REFERENCES "public"."tech_stacks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_categories_fk" FOREIGN KEY ("project_categories_id") REFERENCES "public"."project_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_journal_categories_fk" FOREIGN KEY ("journal_categories_id") REFERENCES "public"."journal_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_series_fk" FOREIGN KEY ("series_id") REFERENCES "public"."series"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_addresses" ADD CONSTRAINT "contact_addresses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_socials" ADD CONSTRAINT "contact_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_og_image_id_media_id_fk" FOREIGN KEY ("default_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_resume_id_media_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "projects__order_idx" ON "projects" USING btree ("_order");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_cover_image_idx" ON "projects" USING btree ("cover_image_id");
  CREATE INDEX "projects_client_idx" ON "projects" USING btree ("client_id");
  CREATE INDEX "projects_agency_idx" ON "projects" USING btree ("agency_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_media_id_idx" ON "projects_rels" USING btree ("media_id");
  CREATE INDEX "projects_rels_technologies_id_idx" ON "projects_rels" USING btree ("technologies_id");
  CREATE INDEX "projects_rels_tech_stacks_id_idx" ON "projects_rels" USING btree ("tech_stacks_id");
  CREATE INDEX "projects_rels_skills_id_idx" ON "projects_rels" USING btree ("skills_id");
  CREATE INDEX "projects_rels_project_categories_id_idx" ON "projects_rels" USING btree ("project_categories_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version__order_idx" ON "_projects_v" USING btree ("version__order");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_cover_image_idx" ON "_projects_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_projects_v_version_version_client_idx" ON "_projects_v" USING btree ("version_client_id");
  CREATE INDEX "_projects_v_version_version_agency_idx" ON "_projects_v" USING btree ("version_agency_id");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_media_id_idx" ON "_projects_v_rels" USING btree ("media_id");
  CREATE INDEX "_projects_v_rels_technologies_id_idx" ON "_projects_v_rels" USING btree ("technologies_id");
  CREATE INDEX "_projects_v_rels_tech_stacks_id_idx" ON "_projects_v_rels" USING btree ("tech_stacks_id");
  CREATE INDEX "_projects_v_rels_skills_id_idx" ON "_projects_v_rels" USING btree ("skills_id");
  CREATE INDEX "_projects_v_rels_project_categories_id_idx" ON "_projects_v_rels" USING btree ("project_categories_id");
  CREATE UNIQUE INDEX "journal_slug_idx" ON "journal" USING btree ("slug");
  CREATE INDEX "journal_hero_image_idx" ON "journal" USING btree ("hero_image_id");
  CREATE INDEX "journal_author_idx" ON "journal" USING btree ("author_id");
  CREATE INDEX "journal_series_idx" ON "journal" USING btree ("series_id");
  CREATE INDEX "journal_updated_at_idx" ON "journal" USING btree ("updated_at");
  CREATE INDEX "journal_created_at_idx" ON "journal" USING btree ("created_at");
  CREATE INDEX "journal__status_idx" ON "journal" USING btree ("_status");
  CREATE INDEX "journal_rels_order_idx" ON "journal_rels" USING btree ("order");
  CREATE INDEX "journal_rels_parent_idx" ON "journal_rels" USING btree ("parent_id");
  CREATE INDEX "journal_rels_path_idx" ON "journal_rels" USING btree ("path");
  CREATE INDEX "journal_rels_projects_id_idx" ON "journal_rels" USING btree ("projects_id");
  CREATE INDEX "journal_rels_skills_id_idx" ON "journal_rels" USING btree ("skills_id");
  CREATE INDEX "journal_rels_technologies_id_idx" ON "journal_rels" USING btree ("technologies_id");
  CREATE INDEX "journal_rels_journal_categories_id_idx" ON "journal_rels" USING btree ("journal_categories_id");
  CREATE INDEX "_journal_v_parent_idx" ON "_journal_v" USING btree ("parent_id");
  CREATE INDEX "_journal_v_version_version_slug_idx" ON "_journal_v" USING btree ("version_slug");
  CREATE INDEX "_journal_v_version_version_hero_image_idx" ON "_journal_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_journal_v_version_version_author_idx" ON "_journal_v" USING btree ("version_author_id");
  CREATE INDEX "_journal_v_version_version_series_idx" ON "_journal_v" USING btree ("version_series_id");
  CREATE INDEX "_journal_v_version_version_updated_at_idx" ON "_journal_v" USING btree ("version_updated_at");
  CREATE INDEX "_journal_v_version_version_created_at_idx" ON "_journal_v" USING btree ("version_created_at");
  CREATE INDEX "_journal_v_version_version__status_idx" ON "_journal_v" USING btree ("version__status");
  CREATE INDEX "_journal_v_created_at_idx" ON "_journal_v" USING btree ("created_at");
  CREATE INDEX "_journal_v_updated_at_idx" ON "_journal_v" USING btree ("updated_at");
  CREATE INDEX "_journal_v_latest_idx" ON "_journal_v" USING btree ("latest");
  CREATE INDEX "_journal_v_rels_order_idx" ON "_journal_v_rels" USING btree ("order");
  CREATE INDEX "_journal_v_rels_parent_idx" ON "_journal_v_rels" USING btree ("parent_id");
  CREATE INDEX "_journal_v_rels_path_idx" ON "_journal_v_rels" USING btree ("path");
  CREATE INDEX "_journal_v_rels_projects_id_idx" ON "_journal_v_rels" USING btree ("projects_id");
  CREATE INDEX "_journal_v_rels_skills_id_idx" ON "_journal_v_rels" USING btree ("skills_id");
  CREATE INDEX "_journal_v_rels_technologies_id_idx" ON "_journal_v_rels" USING btree ("technologies_id");
  CREATE INDEX "_journal_v_rels_journal_categories_id_idx" ON "_journal_v_rels" USING btree ("journal_categories_id");
  CREATE INDEX "testimonials__order_idx" ON "testimonials" USING btree ("_order");
  CREATE INDEX "testimonials_author_avatar_idx" ON "testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "testimonials_client_idx" ON "testimonials" USING btree ("client_id");
  CREATE INDEX "testimonials_project_idx" ON "testimonials" USING btree ("project_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "testimonials__status_idx" ON "testimonials" USING btree ("_status");
  CREATE INDEX "_testimonials_v_parent_idx" ON "_testimonials_v" USING btree ("parent_id");
  CREATE INDEX "_testimonials_v_version_version__order_idx" ON "_testimonials_v" USING btree ("version__order");
  CREATE INDEX "_testimonials_v_version_version_author_avatar_idx" ON "_testimonials_v" USING btree ("version_author_avatar_id");
  CREATE INDEX "_testimonials_v_version_version_client_idx" ON "_testimonials_v" USING btree ("version_client_id");
  CREATE INDEX "_testimonials_v_version_version_project_idx" ON "_testimonials_v" USING btree ("version_project_id");
  CREATE INDEX "_testimonials_v_version_version_updated_at_idx" ON "_testimonials_v" USING btree ("version_updated_at");
  CREATE INDEX "_testimonials_v_version_version_created_at_idx" ON "_testimonials_v" USING btree ("version_created_at");
  CREATE INDEX "_testimonials_v_version_version__status_idx" ON "_testimonials_v" USING btree ("version__status");
  CREATE INDEX "_testimonials_v_created_at_idx" ON "_testimonials_v" USING btree ("created_at");
  CREATE INDEX "_testimonials_v_updated_at_idx" ON "_testimonials_v" USING btree ("updated_at");
  CREATE INDEX "_testimonials_v_latest_idx" ON "_testimonials_v" USING btree ("latest");
  CREATE INDEX "skills__order_idx" ON "skills" USING btree ("_order");
  CREATE UNIQUE INDEX "skills_slug_idx" ON "skills" USING btree ("slug");
  CREATE INDEX "skills_icon_idx" ON "skills" USING btree ("icon_id");
  CREATE INDEX "skills_updated_at_idx" ON "skills" USING btree ("updated_at");
  CREATE INDEX "skills_created_at_idx" ON "skills" USING btree ("created_at");
  CREATE INDEX "technologies__order_idx" ON "technologies" USING btree ("_order");
  CREATE UNIQUE INDEX "technologies_slug_idx" ON "technologies" USING btree ("slug");
  CREATE INDEX "technologies_icon_idx" ON "technologies" USING btree ("icon_id");
  CREATE INDEX "technologies_updated_at_idx" ON "technologies" USING btree ("updated_at");
  CREATE INDEX "technologies_created_at_idx" ON "technologies" USING btree ("created_at");
  CREATE INDEX "technologies_rels_order_idx" ON "technologies_rels" USING btree ("order");
  CREATE INDEX "technologies_rels_parent_idx" ON "technologies_rels" USING btree ("parent_id");
  CREATE INDEX "technologies_rels_path_idx" ON "technologies_rels" USING btree ("path");
  CREATE INDEX "technologies_rels_skills_id_idx" ON "technologies_rels" USING btree ("skills_id");
  CREATE INDEX "tech_stacks__order_idx" ON "tech_stacks" USING btree ("_order");
  CREATE UNIQUE INDEX "tech_stacks_slug_idx" ON "tech_stacks" USING btree ("slug");
  CREATE INDEX "tech_stacks_icon_idx" ON "tech_stacks" USING btree ("icon_id");
  CREATE INDEX "tech_stacks_updated_at_idx" ON "tech_stacks" USING btree ("updated_at");
  CREATE INDEX "tech_stacks_created_at_idx" ON "tech_stacks" USING btree ("created_at");
  CREATE INDEX "tech_stacks_rels_order_idx" ON "tech_stacks_rels" USING btree ("order");
  CREATE INDEX "tech_stacks_rels_parent_idx" ON "tech_stacks_rels" USING btree ("parent_id");
  CREATE INDEX "tech_stacks_rels_path_idx" ON "tech_stacks_rels" USING btree ("path");
  CREATE INDEX "tech_stacks_rels_technologies_id_idx" ON "tech_stacks_rels" USING btree ("technologies_id");
  CREATE INDEX "tech_stacks_rels_skills_id_idx" ON "tech_stacks_rels" USING btree ("skills_id");
  CREATE INDEX "project_categories__order_idx" ON "project_categories" USING btree ("_order");
  CREATE UNIQUE INDEX "project_categories_slug_idx" ON "project_categories" USING btree ("slug");
  CREATE INDEX "project_categories_icon_idx" ON "project_categories" USING btree ("icon_id");
  CREATE INDEX "project_categories_updated_at_idx" ON "project_categories" USING btree ("updated_at");
  CREATE INDEX "project_categories_created_at_idx" ON "project_categories" USING btree ("created_at");
  CREATE INDEX "journal_categories__order_idx" ON "journal_categories" USING btree ("_order");
  CREATE UNIQUE INDEX "journal_categories_slug_idx" ON "journal_categories" USING btree ("slug");
  CREATE INDEX "journal_categories_icon_idx" ON "journal_categories" USING btree ("icon_id");
  CREATE INDEX "journal_categories_updated_at_idx" ON "journal_categories" USING btree ("updated_at");
  CREATE INDEX "journal_categories_created_at_idx" ON "journal_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX "series_slug_idx" ON "series" USING btree ("slug");
  CREATE INDEX "series_cover_image_idx" ON "series" USING btree ("cover_image_id");
  CREATE INDEX "series_updated_at_idx" ON "series" USING btree ("updated_at");
  CREATE INDEX "series_created_at_idx" ON "series" USING btree ("created_at");
  CREATE UNIQUE INDEX "clients_slug_idx" ON "clients" USING btree ("slug");
  CREATE INDEX "clients_logo_idx" ON "clients" USING btree ("logo_id");
  CREATE INDEX "clients_updated_at_idx" ON "clients" USING btree ("updated_at");
  CREATE INDEX "clients_created_at_idx" ON "clients" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_journal_id_idx" ON "payload_locked_documents_rels" USING btree ("journal_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_skills_id_idx" ON "payload_locked_documents_rels" USING btree ("skills_id");
  CREATE INDEX "payload_locked_documents_rels_technologies_id_idx" ON "payload_locked_documents_rels" USING btree ("technologies_id");
  CREATE INDEX "payload_locked_documents_rels_tech_stacks_id_idx" ON "payload_locked_documents_rels" USING btree ("tech_stacks_id");
  CREATE INDEX "payload_locked_documents_rels_project_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("project_categories_id");
  CREATE INDEX "payload_locked_documents_rels_journal_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("journal_categories_id");
  CREATE INDEX "payload_locked_documents_rels_series_id_idx" ON "payload_locked_documents_rels" USING btree ("series_id");
  CREATE INDEX "payload_locked_documents_rels_clients_id_idx" ON "payload_locked_documents_rels" USING btree ("clients_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "contact_addresses_order_idx" ON "contact_addresses" USING btree ("_order");
  CREATE INDEX "contact_addresses_parent_id_idx" ON "contact_addresses" USING btree ("_parent_id");
  CREATE INDEX "contact_socials_order_idx" ON "contact_socials" USING btree ("_order");
  CREATE INDEX "contact_socials_parent_id_idx" ON "contact_socials" USING btree ("_parent_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_logo_dark_idx" ON "site_settings" USING btree ("logo_dark_id");
  CREATE INDEX "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");
  CREATE INDEX "site_settings_default_og_image_idx" ON "site_settings" USING btree ("default_og_image_id");
  CREATE INDEX "site_settings_resume_idx" ON "site_settings" USING btree ("resume_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  DROP TABLE "journal" CASCADE;
  DROP TABLE "journal_rels" CASCADE;
  DROP TABLE "_journal_v" CASCADE;
  DROP TABLE "_journal_v_rels" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "_testimonials_v" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "technologies" CASCADE;
  DROP TABLE "technologies_rels" CASCADE;
  DROP TABLE "tech_stacks" CASCADE;
  DROP TABLE "tech_stacks_rels" CASCADE;
  DROP TABLE "project_categories" CASCADE;
  DROP TABLE "journal_categories" CASCADE;
  DROP TABLE "series" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "contact_addresses" CASCADE;
  DROP TABLE "contact_socials" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TYPE "public"."enum_projects_project_type";
  DROP TYPE "public"."enum_projects_stage";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_project_type";
  DROP TYPE "public"."enum__projects_v_version_stage";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_journal_status";
  DROP TYPE "public"."enum__journal_v_version_status";
  DROP TYPE "public"."enum_testimonials_status";
  DROP TYPE "public"."enum__testimonials_v_version_status";
  DROP TYPE "public"."enum_clients_kind";
  DROP TYPE "public"."enum_contact_socials_platform";
  DROP TYPE "public"."enum_contact_availability";`)
}
