# How to Switch from ChatGPT to Claude (Without Starting Over)

*Updated March 2026 — now includes Anthropic's official memory import tool.*

You don't need to lose your ChatGPT training. This guide shows you how to move everything over in under 15 minutes — using Anthropic's new import tool plus a free generator that builds your project instructions.

---

## The Two-Part Setup (Why Both Matter)

Most people do one of these and wonder why Claude still feels generic. You need both.

**Global Memory** = Claude knows *who you are* across every conversation. Your background, preferences, writing style. Anthropic now has an official tool for this — it takes about 60 seconds.

**Project Instructions** = Claude knows *how to work with you* inside a specific project. Your tone, challenge level, what to focus on, what to ignore. This is what makes the difference between a smart AI and one that actually works like you do.

One is context. One is behavior. You need both.

---

## Step 1: Import Your ChatGPT Memory (60 seconds)

Anthropic just launched an official memory import tool. This fills Claude's global memory with everything ChatGPT knows about you.

1. Go to [claude.com/import-memory](https://claude.com/import-memory)
2. Copy the prompt they provide
3. Paste it into ChatGPT — it will generate a summary of everything it knows about you
4. Copy that output
5. Go to Claude Settings → Capabilities → "Import memory from other AI providers"
6. Paste and confirm

Done. Claude now knows your background, preferences, and working style across every conversation — not just one project.

**⚠️ Important: This only updates your *global* Claude memory.** It does not create project-specific context. If you had multiple threads or projects in ChatGPT — each with their own specialized context — that per-project knowledge is NOT captured by the import tool. You'll handle that in the next steps.

**After importing, review your global memory:** Go to Claude Settings → Capabilities → Memory and read through what was imported. Make sure it covers the big picture — your background, role, general preferences, and working style. If anything is missing, you can add it manually or tell Claude in any conversation: "Remember that..."

---

## Step 2: Migrate Your ChatGPT Threads & Projects

Here's what most people miss: the official import tool gives Claude a general sense of who you are, but it doesn't capture the specific context from individual ChatGPT threads or projects.

Think about how you actually used ChatGPT:
- **A thread you kept going back to** — maybe for writing, strategy, or a specific client
- **A ChatGPT Project** — with its own instructions and context for a specific topic
- **A Custom GPT** — built for a particular workflow

Each of those had specialized context that the global import doesn't cover. You'll want to migrate each one individually.

### The Migration Prompt

**For each ChatGPT thread or project you want to preserve,** copy and paste this prompt into that specific thread or project:

```
I'm migrating from ChatGPT to Claude and want to preserve everything you know about me. Please generate a comprehensive profile that includes:

1. My writing style and tone preferences
2. My professional context and role
3. Common tasks and topics I ask you to help with,
   including any recurring interests or subjects
4. Any specific instructions, preferences, or opinions
   I've expressed — including strong likes, dislikes,
   or points of view on topics we've discussed
5. Projects or ongoing work we've discussed
6. Tools, frameworks, or technologies I frequently work with

Format this as a detailed profile that another AI could use to provide the same level of personalized assistance.
```

Save ChatGPT's response for each thread/project — you'll use it in the next step.

**Run this prompt in every thread and project that matters to you.** Each one has different context. A thread where you brainstormed marketing strategy knows different things than a thread where you wrote code or planned your business.

---

## Step 3: Create Claude Projects (One Per Context)

For each ChatGPT thread or project you migrated, create a matching Claude Project.

1. Go to [claude.ai](https://claude.ai)
2. Click "Projects" in the sidebar
3. Click "Create Project"
4. Name it based on what it's for — "Marketing Strategy," "Client Work — [Name]," "Content Writing," "Code Projects"
5. Don't add instructions yet — we'll generate those in the next step

**The key insight:** One ChatGPT thread = one Claude Project. One ChatGPT Project = one Claude Project. Don't try to merge everything into a single project. Claude Projects work best when they're scoped to a specific context.

**Pro tip:** You can also create a general-purpose project (something like "Strategic Advisor" or "Work Brain") for everyday thinking and work that doesn't fit neatly into a specific project.

---

## Step 4: Build Project Instructions

This is the step most people skip. And it's why their Claude feels like a very smart stranger instead of someone who actually knows how to work with them.

Global memory tells Claude who you are. Project instructions tell Claude how to behave — how direct to be, what to focus on, when to push back, what format you prefer.

### Option A: Use the Free Generator (Recommended)

**The fastest way:** Use the free generator at [claudeforeveryone.com/projectinstructions](https://claudeforeveryone.com/projectinstructions).

It asks you a few questions about your role, your goals, and how you like to work — then generates a complete instruction set you can paste directly into your Project settings.

Takes about 5 minutes per project. The difference in output quality is immediate.

### Option B: Use the Instructions Generator Prompt

If you prefer to do it conversationally, open a new Claude chat and paste your ChatGPT output from Step 2 along with this prompt:

```
I'm setting up a Claude Project and I've pasted my ChatGPT profile below. Before generating my instructions, ask me up to 5 targeted questions to fill in any gaps — focus on my profession, primary use cases, and tone preferences. After I answer, generate a complete Claude Project instruction set as a markdown artifact, formatted and ready to paste directly into a Claude Project's Custom Instructions field.

[PASTE YOUR CHATGPT OUTPUT HERE]
```

Answer Claude's questions, then copy the instruction set it generates.

### Add Instructions to Your Project

1. Click the Project name at the top of any conversation inside it
2. Click "Project settings" or the gear icon
3. Find the "Custom Instructions" field
4. Paste the instruction set (from the generator or from the prompt above)
5. Save

**Repeat this for each Claude Project you created.** Each project should have its own tailored instructions based on the context you exported from the corresponding ChatGPT thread or project.

---

## Step 5: Train Your Project Memory Over Time

Here's what most guides don't tell you: beyond global memory and project instructions, Claude also builds *project-level memory* as you use it.

Every conversation inside your Project adds context. Claude notices what you care about, what decisions you make, how you think. You can also tell it things explicitly:

- "Remember that I prefer bullet points for action items but paragraphs for analysis"
- "Remember that I'm not ready to hire — don't suggest headcount increases"
- "Remember that my biggest client is X and we're in the middle of Y"

You can view, edit, and delete everything Claude remembers in Settings → Capabilities → Memory.

---

## Step 6: Test It

Start a conversation in your new Claude Project. Try these:

- Ask Claude to help you think through a real decision you're facing
- Ask it to write something in your voice
- Ask for its honest take on a plan you're considering

Then open a regular Claude chat (not inside your project) and ask the same question.

The difference should be obvious. The project version will feel like it actually knows you. The regular chat will feel generic.

If they feel the same, check that your instructions saved and that you're chatting inside the project (you'll see the project name at the top of the conversation).

---

## Step 7: What Claude Can Do That ChatGPT Can't

Now that you're set up, here's what makes Claude worth staying for:

### Projects = Persistent, Reliable Context

ChatGPT's memory is inconsistent and global-only. Claude Projects give you context that's consistent, organized, and scoped to what matters for each workspace.

### Skills = Reusable Workflows

Claude Skills let you create custom commands for your most common tasks — meeting summaries, proposal drafts, weekly reviews. Build once, run forever.

### MCP Integrations

Model Context Protocol connects Claude to your actual tools: Google Drive, Gmail, Calendar, GitHub, Airtable, databases, APIs. This is not a chatbot feature. This is an AI that can actually do things.

### Comparison

| Feature | ChatGPT | Claude |
|---------|---------|--------|
| Persistent context | Memory (unreliable) | Projects (consistent) |
| Multi-document context | Limited | Unlimited in Projects |
| Custom workflows | Custom GPTs (siloed) | Skills (portable) |
| Tool integrations | Plugins (deprecated) | MCP (growing fast) |
| Context window | 128k tokens | 200k tokens |
| Memory import | Manual | Official tool (new) |

---

## Your Setup Checklist

- [ ] Imported ChatGPT memory via [claude.com/import-memory](https://claude.com/import-memory)
- [ ] Reviewed global memory — confirmed it covers the big picture
- [ ] Ran the migration prompt in each important ChatGPT thread/project
- [ ] Created a Claude Project for each context you migrated
- [ ] Generated Project Instructions ([generator](https://claudeforeveryone.com/projectinstructions) or prompt) for each project
- [ ] Pasted instructions into each Project's settings
- [ ] Tested project chat vs. regular chat — noticed the difference
- [ ] Started training project memory with "remember that..." prompts
- [ ] Deleted ChatGPT (optional but deeply satisfying)

---

## Questions?

Share your experience with [#QuitGPT](https://quitgpt.org) and #switchtoclaude.

Want ongoing updates, skill templates, and workflow guides? Join the email list at [switchtoclaude.com](https://switchtoclaude.com).

---

*Built by [Nicole Patten](https://njpatten.com) at [Elevate Online](https://elevateonline.com).*
