export function increaseCounterToValue(value) {
  return {type: 'INCREASE_TO_VALUE', val: value};
}

export function decCounterToValue() {
  return {type: 'DECREMENT_TO_VALUE'};
}

export function resetToDefaultValue() {
  return {type: 'DEFAULT_VALUE'};
}
