# AGENTS.md — Python & Data Pipeline Repository

## Environment & Checks
- Use project virtual environment (`.venv/bin/python` or `uv run`).
- Run `pytest` and `ruff check` before reporting completion.

## Engineering Rules
- Use vectorized/streaming I/O cleanly and handle missing or malformed records explicitly rather than silent drops.
- Never hardcode credentials, tokens, or personal host paths in committed code; read from environment variables.
- Document assumptions, data denominators, and schema contracts in docstrings cleanly.
