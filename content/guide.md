# How to Switch from ChatGPT to Claude (Without Starting Over)

You don't need to lose your ChatGPT training. This guide shows you how to extract everything ChatGPT knows about you and rebuild it — better — in Claude.

---

## Step 1: Export Your ChatGPT Context

ChatGPT has learned your writing style, preferences, and workflows from your conversations. Let's extract all of that.

### The Migration Prompt

Copy and paste this prompt into ChatGPT:
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

Save ChatGPT's response — you'll paste it into Claude in the next step.

---

## Step 2: Build Your Claude Project Instructions

Now we'll take your ChatGPT profile and turn it into Claude Project Instructions — but instead of a one-shot reformat, Claude will ask you a few clarifying questions first. This produces instructions that are actually personalized to you, not just a generic reformat of whatever ChatGPT had on file.

### The Instructions Generator Prompt

Open a new Claude conversation and paste your ChatGPT output along with this prompt:
```
I'm setting up a Claude Project and I've pasted my ChatGPT profile below. Before generating my instructions, ask me up to 5 targeted questions to fill in any gaps — focus on my profession, primary use cases, and tone preferences. After I answer, generate a complete Claude Project instruction set as a markdown artifact, formatted and ready to paste directly into a Claude Project's Custom Instructions field.

[PASTE YOUR CHATGPT OUTPUT HERE]
```

Answer Claude's questions, then copy the instruction set it generates.

---

## Step 3: Create Your Claude Project

1. Go to [claude.ai](https://claude.ai)
2. Click "Projects" in the sidebar
3. Create a new Project (name it something like "Personal AI Assistant" or "Work Context")
4. Paste your generated instructions into the "Custom Instructions" field
5. Add any relevant documents (style guides, company docs, code samples)

**Pro tip:** You can have multiple Projects for different contexts (work, creative writing, coding, etc.)

---

## Step 4: Test the Migration

Start a conversation in your new Claude Project. Try these tests:

- Ask Claude to write something in your style
- Request help with a typical task
- Ask for advice on something you'd normally take to ChatGPT

Claude should respond with immediate personalization — often better than ChatGPT, because Projects maintain consistent context across every conversation.

---

## Step 5: What Claude Can Do That ChatGPT Can't

Now that you've migrated, here's what makes Claude better for real work:

### Projects = Persistent Context

Unlike ChatGPT's memory (which is inconsistent), Claude Projects maintain context across all conversations. Set instructions once, and every chat in that Project has full context.

### Skills = Automation

Claude Skills let you create reusable prompts for your most common tasks. Think of them as custom commands you build once and reuse forever.

### MCP Integrations

Model Context Protocol connects Claude to your actual tools: GitHub, file systems, databases, APIs. ChatGPT can't do this.

### Comparison

| Feature | ChatGPT | Claude |
|---------|---------|--------|
| Persistent context | Memory (unreliable) | Projects (consistent) |
| Multi-document context | Limited | Unlimited in Projects |
| Custom workflows | Custom GPTs (siloed) | Skills (portable) |
| Tool integrations | Plugins (deprecated) | MCP (growing ecosystem) |
| Context window | 128k tokens | 200k tokens |

---

## Step 6: Next Steps

### Basic Setup (you're done!)
- ✓ Migrated your ChatGPT context
- ✓ Built personalized Project Instructions
- ✓ Set up your first Claude Project
- ✓ Tested personalization

### Go Deeper

Your Project Instructions are a starting point. In the next video, we'll sharpen them using the Project Instructions Generator — a structured approach to building instructions that actually reflect how you work.

Want to go further? The full course covers:
- Advanced Project architectures
- Building and using Skills
- MCP integrations
- Automating workflows with Claude + n8n
- Real-world case studies

**[Check out Claude for Everyone →](https://claudeforeveryone.com)**

---

## Checklist

- [ ] Ran the Migration Prompt in ChatGPT
- [ ] Pasted output into Claude with the Instructions Generator Prompt
- [ ] Answered Claude's clarifying questions
- [ ] Created my first Claude Project
- [ ] Pasted custom instructions into Project settings
- [ ] Tested personalization
- [ ] Explored Projects, Skills, and MCP
- [ ] Deleted my ChatGPT account (optional but liberating)

---

## Questions?

Share your experience with #QuitGPT and #switchtoclaude on social media.

Want ongoing updates, templates, and workflows? Join the email list at switchtoclaude.com