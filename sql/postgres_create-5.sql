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
	"character_id" serial NOT NULL,
	"race_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	"Name" VARCHAR(255) NOT NULL,
	"Background" TEXT NOT NULL,
	"Level" integer NOT NULL,
	"Strength" integer NOT NULL,
	"Dexterity" integer NOT NULL,
	"Constitution" integer NOT NULL,
	"Intelligence" integer NOT NULL,
	"Wisdom" integer NOT NULL,
	"Charisma" integer NOT NULL,
	"PassivePerception" integer NOT NULL,
	"Alignment" VARCHAR(255) NOT NULL,
	CONSTRAINT "Characters_pk" PRIMARY KEY ("character_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Race" (
	"race_id" serial NOT NULL,
	"race_name" VARCHAR(255) NOT NULL,
	"race_description" VARCHAR(255) NOT NULL,
	"ability_increase_description" VARCHAR(255) NOT NULL,
	"age" TEXT NOT NULL,
	"alignment" TEXT NOT NULL,
	"size" VARCHAR(255) NOT NULL,
	"speed" integer NOT NULL,
	"speed_description" VARCHAR(255) NOT NULL,
	"languages" TEXT NOT NULL,
	"vision" TEXT NOT NULL,
	"traits" TEXT NOT NULL,
	CONSTRAINT "Race_pk" PRIMARY KEY ("race_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Class" (
	"class_id" serial NOT NULL,
	"class_name" VARCHAR(255) NOT NULL,
	"class_description" TEXT NOT NULL,
	"hit_dice" VARCHAR(255) NOT NULL,
	"hp_first_level" VARCHAR(255) NOT NULL,
	"hp_level_up" VARCHAR(255) NOT NULL,
	"prof_armor" VARCHAR(255) NOT NULL,
	"prof_weapons" VARCHAR(255) NOT NULL,
	"prof_tools" VARCHAR(255) NOT NULL,
	"prof_saving_throws" VARCHAR(255) NOT NULL,
	"prof_skills" VARCHAR(255) NOT NULL,
	"equipment" TEXT NOT NULL,
	"spellcasting_ability" VARCHAR(255) NOT NULL,
	CONSTRAINT "Class_pk" PRIMARY KEY ("class_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spells" (
	"spell_id" serial NOT NULL,
	"spell_name" VARCHAR(255) NOT NULL,
	"spell_description" TEXT NOT NULL,
	"spell_higher_level" VARCHAR(255) NOT NULL,
	"range" VARCHAR(255) NOT NULL,
	"components" VARCHAR(255) NOT NULL,
	"material" VARCHAR(255) NOT NULL,
	"ritual" VARCHAR(255) NOT NULL,
	"duration" VARCHAR(255) NOT NULL,
	"concentration" VARCHAR(255) NOT NULL,
	"casting_time" VARCHAR(255) NOT NULL,
	"level" integer NOT NULL,
	"school" VARCHAR(255) NOT NULL,
	"archetype" VARCHAR(255) NOT NULL,
	"circles" VARCHAR(255) NOT NULL,
	CONSTRAINT "Spells_pk" PRIMARY KEY ("spell_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spells_List" (
	"character_spell_id" serial NOT NULL,
	"character_id" integer NOT NULL,
	"spell_id" integer NOT NULL,
	CONSTRAINT "Spells_List_pk" PRIMARY KEY ("character_spell_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spells_Classes" (
	"spell_class_id" serial NOT NULL,
	"spell_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	CONSTRAINT "Spells_Classes_pk" PRIMARY KEY ("spell_class_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Users_Characters" (
	"user_character_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"character_id" integer NOT NULL,
	CONSTRAINT "Users_Characters_pk" PRIMARY KEY ("user_character_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Alignment" (
	"alignment_id" serial NOT NULL,
	"alignment_name" VARCHAR(255) NOT NULL,
	"alignment_details" TEXT NOT NULL,
	CONSTRAINT "Alignment_pk" PRIMARY KEY ("alignment_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "Characters" ADD CONSTRAINT "Characters_fk0" FOREIGN KEY ("race_id") REFERENCES "Race"("race_id");
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_fk1" FOREIGN KEY ("class_id") REFERENCES "Class"("class_id");




ALTER TABLE "Spells_List" ADD CONSTRAINT "Spells_List_fk0" FOREIGN KEY ("character_id") REFERENCES "Characters"("character_id");
ALTER TABLE "Spells_List" ADD CONSTRAINT "Spells_List_fk1" FOREIGN KEY ("spell_id") REFERENCES "Spells"("spell_id");

ALTER TABLE "Spells_Classes" ADD CONSTRAINT "Spells_Classes_fk0" FOREIGN KEY ("spell_id") REFERENCES "Spells"("spell_id");
ALTER TABLE "Spells_Classes" ADD CONSTRAINT "Spells_Classes_fk1" FOREIGN KEY ("class_id") REFERENCES "Class"("class_id");

ALTER TABLE "Users_Characters" ADD CONSTRAINT "Users_Characters_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "Users_Characters" ADD CONSTRAINT "Users_Characters_fk1" FOREIGN KEY ("character_id") REFERENCES "Characters"("character_id");


