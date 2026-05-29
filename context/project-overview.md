#Ghost AI

## Overview

Ghost AI is a real-time collaborative system design workspace. Users describe a system in plain English, an AI agent maps that system onto a shared canvas, collaborators refine the arhitecture, and the app generates a technical specification from the resulting graph.

## Goals
1. Let authenticated users create and manage architecture projects.
2. Provide a collaborative real-time canvas for system design.
3. Let users import preuilt starter system designs into the canvas.
4. Let AI generate an initial architecture from a natural language promt.
5. Let collorators refine the generated architecture.
6. convert the final graph into a persistent Markdown technical spec.

## Core User Flow

1. User signs in.
2. User creates or selects a project.
3. User enters the project workspace.
4. User optionally imports a starter system design template into the canvas.
5. User prompts the AI to generate or extend the system design
6. AI generates nodes and edges in the shared canvas.
7. Collaborators edit and refine the design.
8. User triggers spec generation.
9. App persistes the generated Markdown spec.
10. User reiews or downloads the spec.

## Features

### Authentication and Projects

-User sign-in and route protection.
-Project creation,ownership, and collaorator access.
-Project list and workspace navigation.

### Collaborative Canvas

-shared real-time canvas using liveblokcs and react flow.
-live cursors, presence indicators, and node/edge editing.
-canvas snapshots persisted to the filesystem.

### Starter System Designs

-a curated library of prebuilt system design templates.
-users can import a starter template into the canvas at any point during editing.
-templates are static canvas snapshots loaded directly into the active room.
-covers common patterns: monolith, microservices, event-driven, serverless, and more.

### AI Architecture Generation

-AI generates a system design from a user-supplied prompt.
-output is structured as canvas nodes and edges written into the shared room.
-Generation runs as a durable background tas.

### Spec Generation

-The current canvas graph is converted into a Markdown technical specification.
-specs are persisted as files and linked to the project in the dataase
-users can view and download generated specs.

## Scope
- Authentication and route protection.
-Project creation and ownership.
-Collaorator access by project.
-Starter system design template library and import.
-Real-time shared canvas with nodes, edges, and presence.
-AI powered architecture generatio from prompts.
-AI-powered markdown spec genertion from the canvas graph.
-persistent storage for project metadata and generated artifacts.
-spec download.

### Out of scope

-Billing and subscription.
-Enterprise permission tiers beyond owner and collaborator.
-Versioned spec history and review workflows.
-Productio object storage migration.
-Mobile-native applications.

## Succes Criteria

1. A signed-in user can create and open a project.
2. Multiple users can collaborate in same canvas simultaneously.
3. A user can import a prebuilt starter design into the canvas.
4. AI can generate an architecture into the shared room from a prompt .
5. The graph can be converted into a persisted Markdown spec.
6. Project metadata and generated artifacts are stored in the correct layers.