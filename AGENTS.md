
## Behavioral tests (Gherkin)

**BDD PRINCIPLES**: 

- Test all the most important behavior
- Make the features readable for all stakeholders
- Keep the step definition grammar small

**BDD PREFER**: 
- declarative steps
- parameterized steps
- numbers as digits
- concise phrasing 
- support `plural(s)` and `a/an/the` articles
- values in step text
- a {should} parameter for `/should(?: not)/i`, if you need both tests

**BDD AVOID**: 
- imperative steps
- single-use steps
- single-use parameters (worse than single-use steps *unless*
  it is a general term likely to be reused, e.g. hidden/visible)
- reading step text for code logic (worse than single-use parameters)
- steps with "X and Y"
- repetitive steps in one scenario
- overly-parameterized steps
  
**BDD PROCESS:**
1. Write or revise the feature files
2. Derive the vocabulary from the written steps
3. Examine and possibly rewrite the features, keeping in mind the 
   prefer and avoid lists, and balancing the priniciples appropriately.
4. Derive the step vocabulary
5. Before implementing step definitions, show me the list of new step
   expressions, with how many scenario lines each one serves.

How to keep the vocabulary the right size
- When two steps differ only by a value, a noun, or a comparison, merge them
  into one parameterized step. Rearrange the phrasing to support this if necessary.
- Consider using parameters where possible, e.g. for domain nouns, states, outcomes, 
  quantities, articles, values, etc.
- Use DocStrings or DataTables for configuration or object creation.
  DocStrings automatically parse json and yaml if written as \`\`\`yaml.
- Use Scenario Outlines instead of near-duplicate scenarios.
- Write steps declaratively, in the domain's own language, so that the same
  idea is always the same phrase.
- Usually avoid parameterizing the main subject of a step, or you will be
  trading multiple simple steps for one mammoth step where the logic is opaque.