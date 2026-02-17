---
name: security-guidance
description: Security best practices and vulnerability prevention. Use when writing code that handles user input, external data, shell commands, or sensitive operations. Automatically checks for common security anti-patterns.
---

# Security Guidance

This skill provides security awareness when writing code. Be vigilant about these common vulnerability patterns.

## Critical Security Patterns to Avoid

### 1. Command Injection

**Never use untrusted input in shell commands:**

```javascript
// DANGEROUS - command injection vulnerability
exec(`command ${userInput}`)
child_process.exec(`ls ${directory}`)

// SAFE - use execFile with array arguments
execFile('command', [userInput])
spawn('ls', [directory])
```

```python
# DANGEROUS
os.system(f"command {user_input}")

# SAFE
subprocess.run(['command', user_input], check=True)
```

### 2. GitHub Actions Workflow Injection

**When editing `.github/workflows/*.yml` files:**

```yaml
# DANGEROUS - attacker can inject commands via PR title
run: echo "${{ github.event.pull_request.title }}"

# SAFE - use environment variables
env:
  TITLE: ${{ github.event.pull_request.title }}
run: echo "$TITLE"
```

**Risky GitHub context variables:**
- `github.event.issue.title` / `body`
- `github.event.pull_request.title` / `body`
- `github.event.comment.body`
- `github.event.commits.*.message`
- `github.event.head_commit.message`
- `github.head_ref`

### 3. XSS (Cross-Site Scripting)

```javascript
// DANGEROUS
element.innerHTML = userContent
document.write(userContent)
dangerouslySetInnerHTML={{ __html: userContent }}

// SAFE
element.textContent = userContent  // For plain text
DOMPurify.sanitize(userContent)    // If HTML needed
```

### 4. Code Injection

```javascript
// DANGEROUS - arbitrary code execution
eval(userInput)
new Function(userInput)

// SAFE - use specific parsers
JSON.parse(jsonString)  // For JSON data
```

### 5. Unsafe Deserialization

```python
# DANGEROUS - pickle can execute arbitrary code
pickle.loads(untrusted_data)

# SAFE - use JSON or other safe formats
json.loads(untrusted_data)
```

## Security Checklist

When writing code, verify:

- [ ] User input is validated before use
- [ ] Shell commands use array arguments, not string interpolation
- [ ] HTML content is sanitized before insertion
- [ ] No `eval()`, `new Function()`, or equivalent with user data
- [ ] Secrets are not hardcoded or logged
- [ ] SQL queries use parameterized statements
- [ ] File paths are validated to prevent path traversal
- [ ] Authentication/authorization checks are in place
- [ ] Error messages don't expose sensitive information
- [ ] Dependencies are from trusted sources

## When to Be Extra Careful

- Editing workflow files (`.github/workflows/`)
- Handling file uploads
- Processing user-generated content
- Building shell commands
- Deserializing data
- Rendering HTML from external sources
- Working with authentication/authorization
- Accessing databases
- Making HTTP requests with user-controlled URLs

## Resources

- [GitHub Actions Security Guide](https://github.blog/security/vulnerability-research/how-to-catch-github-actions-workflow-injections-before-attackers-do/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
