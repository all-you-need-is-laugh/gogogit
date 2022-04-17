// not used

async function promptOptions (message, options, defaultOption) {
  const parsedDefaultOption = defaultOption[0].toUpperCase() + defaultOption.substring(1);
  const parsedOptions = options.map(option => {
      if (typeof option === 'string') {
          const isDefaultOption =  option.toLowerCase() === defaultOption.toLowerCase();
          return {
              alias: option[0].toLowerCase(),
              isDefaultOption,
              label: isDefaultOption ? parsedDefaultOption : option,
              value: option,
          };
      }
  });

  const aliasesMap = {};
  for (const opt of parsedOptions) {
      if (aliasesMap[opt.alias]) {
          throw `Aliases for options "${aliasesMap[opt.alias].value}" and "${opt.value}" are not unique: ${opt.alias}`;
      }

      aliasesMap[opt.alias] = opt.value;
  }

  const suggestionsArray = parsedOptions.map(option => {
      const optionString = `${option.alias}/${option.label}`;
      return option.isDefaultOption ? $.cyan(optionString) : optionString
  });
  const suggestions = `(${suggestionsArray.join('/')}, ${$.cyan('Enter')} for ${$.cyan(parsedDefaultOption)}))`;

  let fullMessage = `${message} ${suggestions}`;

  const answer = await prompt(fullMessage);
  console.log(`### > askOptions > answer`, answer);

  if (!answer) return defaultOption;

  const answerLowered = answer.toLowerCase();

  for (const option of options) {
      if (answerLowered === option.alias || answerLowered === option.value.toLowerCase()) {
          return option.value
      }
  }

  throw `Provided incorrect answer (${answer}) for prompt: ${message}`;
}
