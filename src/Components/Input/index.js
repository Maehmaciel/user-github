import React, {
    useEffect,
    useRef,
    useState,
  } from 'react';
  import { Text, TextInput } from 'react-native';
  import TextInputMask from 'react-native-text-input-mask';
  import { useField } from '@unform/core';
  function Input({ name, mask, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    useEffect(() => {
      inputRef.current.value = defaultValue;
    }, [defaultValue]);
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        clearValue(ref) {
          ref.value = '';
          ref.clear();
        },
        setValue(ref, value) {
          ref.setNativeProps({ text: value });
          inputRef.current.value = value;
        },
        getValue(ref) {
          return ref.value;
        },
      });
    }, [fieldName, registerField]);
    return (
        <>
        {mask?
        <TextInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        mask={mask}
        onChangeText={(formatted, extracted) => {
          if (inputRef.current) {
            inputRef.current.value = extracted;
          }
        }}
        {...rest}
      /> : <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      autoCorrect={false}
      onChangeText={value => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
      />
        }
         
      { error && <Text>{error}</Text> }
        </>
     
    );
  };
  export default Input;