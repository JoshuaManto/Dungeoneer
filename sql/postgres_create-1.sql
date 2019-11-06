CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"username" VARCHAR(255) NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Sessions" (
	"session_id" serial NOT NULL,
	"cookie_id" integer NOT NULL,
	"createdAt" DATE NOT NULL,
	CONSTRAINT "Sessions_pk" PRIMARY KEY ("session_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Characters" (
	"characters_id" serial NOT NULL,
	"race_id" integer NOT NULL,
	"Name" VARCHAR(255) NOT NULL,
	"Strength" integer NOT NULL,
	"Dexterity" integer NOT NULL,
	"Constitution" integer NOT NULL,
	"Intelligence" integer NOT NULL,
	"Wisdom" integer NOT NULL,
	"Charisma" integer NOT NULL,
	CONSTRAINT "Characters_pk" PRIMARY KEY ("characters_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Race" (
	"race_id" serial NOT NULL,
	"race_name" VARCHAR(255) NOT NULL,
	"race_description" VARCHAR(255) NOT NULL,
	"ability_increase_description" VARCHAR(255) NOT NULL,
	"age" VARCHAR(255) NOT NULL,
	"alignment" VARCHAR(255) NOT NULL,
	"size" VARCHAR(255) NOT NULL,
	"speed" integer NOT NULL,
	"speed_description" integer NOT NULL,
	"languages" integer NOT NULL,
	"vision" integer NOT NULL,
	"traits" integer NOT NULL,
	CONSTRAINT "Race_pk" PRIMARY KEY ("race_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Class" (
	"class_id" serial NOT NULL,
	"class_name" VARCHAR(255) NOT NULL,
	"class_description" VARCHAR(255) NOT NULL,
	"hit_dice" VARCHAR(255) NOT NULL,
	"hp_first_level" VARCHAR(255) NOT NULL,
	"hp_level_up" VARCHAR(255) NOT NULL,
	"prof_armor" VARCHAR(255) NOT NULL,
	"prof_armor" VARCHAR(255) NOT NULL,
	"prof_weapons" VARCHAR(255) NOT NULL,
	"prof_tools" VARCHAR(255) NOT NULL,
	"prof_saving_throws" VARCHAR(255) NOT NULL,
	"prof_skills" VARCHAR(255) NOT NULL,
	"spellcasting_ability" VARCHAR(255) NOT NULL,
	"equipment" VARCHAR(255) NOT NULL,
	CONSTRAINT "Class_pk" PRIMARY KEY ("class_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Inventory" (

) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spells" (
	"spell_id" serial NOT NULL,
	"spell_name" VARCHAR(255) NOT NULL,
	"spell_description" VARCHAR(255) NOT NULL,
	"spell_higher_level" VARCHAR(255) NOT NULL,
	"range" VARCHAR(255) NOT NULL,
	"components" VARCHAR(255) NOT NULL,
	"material" VARCHAR(255) NOT NULL,
	"ritual" VARCHAR(255) NOT NULL,
	"duration" VARCHAR(255) NOT NULL,
	"casting_time" VARCHAR(255) NOT NULL,
	"level" integer NOT NULL,
	"school" VARCHAR(255) NOT NULL,
	"class_id" VARCHAR(255) NOT NULL,
	"archetype" VARCHAR(255) NOT NULL,
	"circles" VARCHAR(255) NOT NULL,
	CONSTRAINT "Spells_pk" PRIMARY KEY ("spell_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Skills" (
	"Maybe Stretch Feature" BINARY NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spells_List" (

) WITH (
  OIDS=FALSE
);



CREATE TABLE "Attributes" (
	"Maybe Stretch Feature" BINARY NOT NULL
) WITH (
  OIDS=FALSE
);





ALTER TABLE "Characters" ADD CONSTRAINT "Characters_fk0" FOREIGN KEY ("race_id") REFERENCES "Race"("race_id");




ALTER TABLE "Spells" ADD CONSTRAINT "Spells_fk0" FOREIGN KEY ("class_id") REFERENCES "Class"("class_id");




