# Technical software, calculation programmes and advanced data analysis.

Artik Lab develops advanced software for clients when the problem is not solved by a dashboard or by standard company software: technical calculations, mathematical models, operating data, expert rules and workflows that can be checked with tests.

## When company know-how is too important to remain in spreadsheets, legacy code or the heads of a few experts.

Many industrial companies run on calculations, exceptions and technical decisions that have grown over time. Sometimes they live in fragile spreadsheets, sometimes in obsolete software, sometimes in procedures known only by long-time users. The service turns that knowledge into readable, testable and transferable systems.

## Systems that make repeatable what now depends on experience, files and manual checks.

Value comes from combining software engineering, data analysis and expert knowledge formalisation. The outcome is not a demo prototype, but a system with acceptance criteria, tests, documentation and clear boundaries.

### Calculation and verification programmes

Calculation programmes that, on the same data, always give the same result: checks, scenarios, simulations and repeatable verifications.

### Data systems and advanced analysis

Collection, normalisation and reading of operating data to detect anomalies, patterns, priorities and risks.

### Updating technical software that nobody wants to touch any more

Audit of the existing code, reconstruction of the logic, parsers for historical formats and progressive rewrite.

### Interfaces, reports and APIs

Tools usable by technical offices and operating functions: decision dashboards, reports, exports and integrations.

## From technical process to verifiable system.

1. **Technical audit**: Read the existing system: data, formulas, flows, dependencies, known errors and operational risk.
2. **Domain formalisation**: Expert rules become entities, constraints, assumptions, edge cases and decision criteria.
3. **Verifiable architecture**: The calculation core is separated from interfaces, reports and AI components, so it remains controllable.
4. **Computable prototype**: Build a small complete flow: source data, data model, calculation, verification and usable result.
5. **Validation**: Automated tests, synthetic cases, regression and comparison with known references measure differences and risks.
6. **Production**: The system becomes usable through interfaces, APIs, reports, documentation and maintenance responsibilities.

## What remains inside the company.

- Technical blueprint with architecture, risks, data, assumptions and open decisions.
- Structured knowledge base with operating rules, constraints, sources and confidence levels.
- Calculation engine, data system or technical application with automated tests.
- Verification dossier with discrepancies, tolerances, acceptance criteria and remediation priorities.
- Reports, interfaces or APIs to integrate the system into real work.
- Roadmap in progressive work packages, with testable outputs and technical checkpoints.

## Typical problems the service can address.

### Technical documentation out of control

A technical office uses complex files to take recurring decisions. The risk is that the formulas are no longer checkable and that every change requires historical memory. The project reconstructs the rules, turns them into a data model and adds tests to avoid regressions.

### Technical software that still works, but nobody can change it with safety any more

A critical application still works, but it depends on dated technologies and undocumented logic. The work starts from the audit, separates what must be preserved from what must be redesigned and builds a progressive rewrite with comparison on the results.

### Industrial data that do not help to take decisions

The process produces data, but the company uses them mainly for retrospective reports. The analysis looks for useful signals for operating priorities, anomalies, forecasts and control choices, also stating when the data are not enough.

### Company knowledge that is never documented

Some decisions depend on the experience of key roles. The project makes rules, exceptions and attention thresholds explicit, so the knowledge stays available even when people, tools or work volumes change.

## Five real cases

What was obtained.

### 1. Technical office: The calculation rules live in the code and in one person, not in a specification document.

Eight weeks of analysis on about 267 source files: 37 decision rules written down and 18 issues the company did not know it had.

The situation. A company designs made-to-order components whose sizing requires regulatory checks. For more than twenty years the work has gone through an in-house calculation programme, on a development platform that is no longer supported, with proprietary file formats that were never documented. The programme works, but nobody can change it with reasonable safety. And the specifications do not exist: the rules live inside the code and in the experience of a single designer.

What was done. The requirements were not collected; they were reconstructed. The work reads three sources in parallel — the source code, the archive of projects actually delivered, and the technical office's indications — and collides them with one another: every rule extracted from the code is checked against the data and taken back to the expert, every indication from the expert is checked against the code. No statement is accepted on trust, neither the expert's nor the code's; what cannot be verified is declared as such instead of remaining implicit.

What changed. The company stopped depending on knowledge that existed in only one place. What had been tacit became a document that can be discussed, and together with the map of the system came the list of inconsistencies that nobody could still see, including divergences between what the manual prescribes and what the programme actually runs.

- Measured on the project: About 267 source files and twelve libraries mapped in eight weeks of analysis. 37 decision rules written down: 13 hard constraints, 19 optimisation heuristics (rules of thumb), 5 diagnostic rules.
- What came out: 18 issues in the software in use, classified by severity, each with a proposed treatment. Added to these are twelve documented limitations and ten requirements for the new system.
- How it continues: A path in testable packages, in which every stage has a numerical acceptance criterion agreed before work starts.
- Declared limit: The numbers come from this project: they say what the method produced there, not what it will produce elsewhere.

### 2. Application processing and back office: Requests arrive by email. The company's software does not follow them.

Two official documents already filled with checked data; no communication goes out without a person's approval.

The situation. An organisation receives requests by email, in free form, written by different people. Each case requires precise data, some of it verifiable only by crossing several pieces of information, and produces official documents on fixed templates. Qualified time is spent on carrying data: rereading, asking for the missing item, waiting, recopying the same fields into several documents, chasing whoever must complete their part. The bottleneck is not the decision: it is the carrying.

What was done. An assistant watches the inbox. It reads the message, extracts the data, checks them against the organisation's conditions and replies in plain language explaining which item is missing and in what form it is needed, instead of sending back an empty form. Above it works a manager that knows the life cycle of the case: how many times the same item has already been asked for, whether whoever must complete their part has replied within the stated days, whether the applicant already has an open case. After a declared number of fruitless exchanges the case is frozen, instead of feeding an endless exchange.

What changed. When the case is complete, the official documents come out already filled on the organisation's templates, with the fields populated from validated data. Qualified time returns to the judgement of merit, which is the only part that really required an experienced person.

- Measured on the project: 135 automated tests passing on data models, the validation engine, document generation and case handling, including six complete paths from email to document.
- Project choice: Zero automatic sends: every outbound communication goes through an operator's approval. In a process that produces official acts, automation stops one step before the signature.
- Declared limit: Time saved has not yet been measured before and after on a full cycle. The project states what the system does, not by how much it shortens the case.

### 3. Field crews: The weekly plan for crews in the field is still made by hand.

The weekly plan is calculated in a few seconds and is regenerated when a constraint changes. How much time it saves has not yet been measured, and is not declared.

The situation. When a company sends crews to customers, the weekly programme is born from dozens of constraints that get in one another's way: addresses scattered over a wide territory, time windows imposed by customers, commercial priorities and legal deadlines, durations that change with the type of job, crews that are not interchangeable. Made by hand the plan always comes out feasible but never efficient, and there is no benchmark to notice the difference.

What was done. The problem is formulated as a routing problem with time windows and solved with an optimisation solver. A first level distributes jobs across the days, balancing crew capacity and placing the heaviest jobs first. A second solves each day as a multi-vehicle route, with real travel times taken from a road service and time windows treated as constraints that cannot be broken.

What changed. The manager receives a plan ready to use: routes on a map, a daily calendar per unit, kilometres, driving hours and crew saturation. And the same plan is regenerated in a few seconds when a constraint changes, which is the part needed at once, when someone drops out.

- How it was tried: On a demonstration archive with fictional names — 35 sites, 128 people, two mobile units — the full weekly plan comes out in a few seconds, against the hours that the work by hand requires.
- What it returns: On every run: total kilometres, driving hours and saturation percentage per crew. These are the numbers that make it possible to compare two plans, instead of trusting the first one.
- Declared limit: There is not yet a measured before-and-after comparison on a real customer. Until there is, no saving percentage is declared: that would be an estimate presented as a measurement.

### 4. Public-facing services: Recognising catalogue items from a photo, without a campaign of photographs classified by hand.

Opening a new site means loading a file, not collecting and classifying photographs of every item by hand.

The situation. Recognising catalogue items from a photo is expensive if every site must first collect and classify photographs by hand, and the catalogue changes every day. That is what makes activation times prohibitive for traditional solutions in this kind of service.

What was done. The alternative approach is to describe the catalogue instead of showing it. The day's items are loaded in declarative form — name, category, extended description, ingredients, quantities — and a general-purpose multimodal model recognises from those descriptions, not from an archive of labelled images. The system also handles composed items, with portion coefficients, so that the values stay correct when half-portions of different products sit in the same choice.

What changed. Activating a new site means loading its catalogue. Dedicated hardware is not needed: the person's smartphone is used, with no kiosk and no readers. And the cost scales with traffic, instead of being the fixed cost of a presence that has to be kept even when ten people pass.

- How it is checked: A regression suite on real images, with the reference truth declared for every image: a change to the model or to the instructions is measured on a stable bench, instead of by impression.
- Specified, not yet finished: Seven languages across the whole interface and the catalogue content. Full localisation is planned, not yet completed.
- Declared limit: The accuracy figure is not yet declarable: part of the recent images has no reference truth and is excluded from the tests. It is the first number anyone evaluating this solution will ask for, and it is not estimated in place of measuring it.

### 5. Safety and training: Mandatory training that expires without anyone noticing.

18 types of mandatory course, each with its own expiry; for every person four states (valid, due soon, expired, never taken) and a notice period that can be adjusted.

The situation. Whoever is accountable for the mandatory training of tens or hundreds of people keeps the status on spreadsheets that age with every hire and every change of role. The risk is not theoretical: it is noticing an overdue expiry during an inspection, with what that implies for occupational safety.

What was done. The problem is not calculating a date. It is holding together people records, course history and periodicity rules that differ by role and by activity, and calculating for every person and every obligation one of four states: valid, due within the threshold, expired, never taken. From there come the training matrix readable at a glance, the reminders in a formal register and the periodic report.

What changed. When the matrix exists, the work becomes scheduling the courses instead of reconstructing the status. Personal data stay on the organisation's server: no sending to external services, obtained as an architecture constraint and not as a statement of intent.

- Measured on the project: 18 types of mandatory course modelled, with periodicity from one to five years and some one-off. Four states calculated for every combination of person and obligation, with default notice at 90 days and configurable per customer.
- How it was tried: On a demonstration archive with fictional names: eight companies, about 175 people and more than 700 training records, with a realistic distribution of states.
- Declared limit: The calculation follows fixed rules and, on the same data, always gives the same result, and that is as it should be: in a periodicity rule there is nothing to hand to a model. AI is useful one step before, to bring in data that today arrive disordered, and one step after, to notice that a rule has changed.

## Before choosing the format, recognise the process.

The Atlas gathers concrete AI application examples across documents, operations, HR, marketing, software, governance, production, training and data. It helps decide whether the need requires consulting, data analysis, technical development or training.

Atlas page: https://ar-tik.com/en/ai-applications-atlas.md

## AI can help, but the technical core must remain explainable.

In technical systems, opaque components should not replace verifiable calculation. AI can help explore data, explain results, propose scenarios, read documents or assist the user. The deterministic core, domain rules and tests remain the control point.

## Where the boundary sits: the calculation stays repeatable, AI works on top of it.

Five different projects, the same choice: what decides is a calculation that can be repeated and checked with tests; AI works on top of it. Every card says where the boundary sits and how it is checked.

### 1. Technical office: The software calculates, but the decisions are taken by one person

The choices of someone with twenty years in the trade become rules written in the calculation programme; the regulatory checks remain a repeatable calculation.

In many technical offices the programme runs the checks, while the choices that lead to an efficient solution stay with whoever has twenty years in the trade: where to start, how to correct when the checks do not add up, when a formally correct solution is not reasonable.

The project turns these decisions into explicit constraints, heuristics (rules of thumb) and diagnostic rules, which become parameters of the calculation engine. On top of the core work specialised agents, instructed on historical cases and on the solutions actually adopted: one proposes the starting configuration for a new problem, one chooses the corrective strategy when optimisation does not converge, one compares the result with analogous cases and flags when it is mathematically correct but atypical.

The two layers stay separate. The regulatory checks are repeatable: on the same data they always give the same result. AI works on top of the calculation, not inside it, and the expert stays in the loop to validate, correct and enrich.

- How it is checked: 695 automated tests on the engine, run on every integration. The rebuilt engine reproduces 58 verification cases out of 63 to the printed digit, and 44 historical archives out of 44 are reread without exceptions by decoders written without having the documentation of the formats.
- What is missing, declared: The fact base reaches 98.8% completeness — 399 entries out of 404 — and the 5 that remain are declared and justified instead of omitted.
- Independent check: Eight campaigns run by agents tasked with refuting the work done. The refutations found were repaired before delivery, not filed away.

### 2. Application processing and back office: Artificial intelligence writes the draft; the company's rules decide the outcome.

The conditions for accepting or rejecting a case sit in a file that the office edits without touching the code. Artificial intelligence prepares the data and communicates the outcome; it does not set it.

On a process that produces official documents, the text can be written by artificial intelligence; whether the case is accepted or not is decided by the rules, not by the model.

The conditions for accepting or rejecting a case sit in a readable configuration file that the technical office updates itself when a rule changes, without going through development. Artificial intelligence reads the emails, extracts the data and composes the reply; the calculation programme decides the outcome and justifies it.

And sending remains a human gesture: the draft is ready, the signature belongs to whoever replies.

- How it is checked: 135 automated tests passing, including six complete paths from email to the generated document.
- Where the boundary sits: 100% of outbound communications go through an operator's approval. No automatic sending, by project choice and not by a technical limit.

### 3. Field crews: The crew plan also lists the jobs that cannot be fitted, and why.

The programme can leave a job out, and it declares it with a cost tied to priority, instead of producing a plan that stands up on paper and not on the road.

The value is not only the shortest route: it is knowing what stays out and why.

Instead of forcing an unfeasible programme, the programme can leave a job out and declares it with a cost tied to priority. What the manager receives is an executable plan plus the justified list of what was not plannable — insufficient capacity, incompatible time window — instead of jobs that disappear in silence.

Calculation time is also declared at the start: it is a project parameter, not a side effect of how large the problem is.

- How it is checked: The indicators returned on every run — kilometres, driving hours, saturation per crew — make two different plans comparable, which is the only way to know whether the second is better than the first.
- Declared limit: No measured before-and-after comparison on a real customer, therefore no saving percentage declared.

### 4. Public-facing services: When photo recognition is wrong, the correction is already designed and limited.

The correction offered to the person shows only visually similar alternatives, and not the prices.

A recognition system in the public's hands is judged by how it treats the cases in which it is wrong.

Here image quality is assessed before sending, and a retake is asked for when the image is blurred or incomplete. After recognition the person confirms or corrects, but the correction is designed not to become a loophole: the list of alternatives contains only visually similar items, and prices are not visible.

The burden of checking moves to the user without opening the door to abuse, and it is this choice, more than the model, that determines whether the system holds up in operation.

- How it is checked: A regression suite on real images with declared reference truth: changes to the model or to the instructions are measured on a stable bench.
- Declared limit: Accuracy is not yet a declarable number, because part of the bench has no reference truth. This is stated, instead of being estimated.

### 5. Analysis and reports: The numbers are calculated by code; AI writes the narrative

No number in the report is born from a model: the quantities are calculated by a programme that, on the same frozen data, always gives the same result.

In reports the separation is sharp. The quantities are calculated by a programme that, on the same frozen data, always gives the same result, with tests that reproduce them identical on every run; the text is written anchored to those numbers and to the real quotations.

The finished document is then reread by synthetic reader profiles, with a declared quality threshold below which it is not delivered.

And when the obvious metric does not discriminate — categories where every activity sits above 4.8 stars — the report says so, instead of building a verdict on top of it.

- How it is checked: A test network reproduces already delivered reports byte for byte: a code change that would alter a number already delivered does not pass.
- How every number is written: Every number carries its own denominator and its own source. Statements that find no support in the corpus are corrected, even when they had already circulated.

## Signals that it is time to intervene.

- Important calculations depend on undocumented files that are hard to verify.
- A technical application still works, but nobody wants to change it anymore.
- Operational data exists, but it does not yet guide priorities, anomalies or forecasts.
- Technical decisions depend on a few experts rather than on a shared system.
- Leadership needs to invest but lacks a clear technical dossier on risk, value and feasibility.

## FAQ

### Is this generic software development?

No. It is designed for problems that require technical domain knowledge, data, mathematics, algorithms, tests and verification criteria.

### Do specifications need to be complete already?

No. Often the first task is to reconstruct specifications, rules, assumptions and edge cases from the existing system and expert users.

### Does AI decide instead of technicians?

No. In technical contexts AI is used as support. Critical parts remain explainable, tested and under human responsibility.

### How is know-how protected?

The project works with agreed boundaries, access, data and materials. Public examples use only anonymised descriptions that cannot identify the client.
