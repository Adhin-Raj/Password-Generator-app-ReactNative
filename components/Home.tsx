import { PasswordSchema } from "@/yup";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckboxWithLabel from "./CheckboxWithLabel";
import CustomButton from "./CustomButton";
import Result from "./Result";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState("");
  const [password, setPassword] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);

  const generateCharList = (values: number) => {
    if (!numbers && !lowerCase && !upperCase && !special) {
      alert("please select desired password constraints...!");
    }

    let combined = "";

    const numbersList = "0123456789";
    const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialList = "!@#$%^&*";

    if (numbers) {
      combined += numbersList;
    }
    if (lowerCase) {
      combined += lowercaseList;
    }
    if (upperCase) {
      combined += uppercaseList;
    }
    if (special) {
      combined += specialList;
    }

    if (combined.length > 0) {
      generatePassword(combined, values);
    }
  };

  const generatePassword = (charList: string, values: number) => {
    let pass = "";
    for (let i = 0; i < values; i++) {
      let randomNum = Math.floor(Math.random() * charList.length);
      pass += charList[randomNum];
    }
    setPassword(pass);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setIsGenerated(false);
    setNumbers(false);
    setLowerCase(false);
    setUpperCase(false);
    setSpecial(false);
    setPassword("");
    setPasswordLength("");
  };

  return (
    <SafeAreaView>
      <Text style={styles.mainHeading}>Password Generator</Text>
      <Formik
        initialValues={{ passwordLength: passwordLength }}
        validationSchema={PasswordSchema}
        onSubmit={(values) => {
          generateCharList(Number(values.passwordLength));
        }}
      >
        {({ handleChange, handleSubmit, values, errors, resetForm }) => (
          <View>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.label}>Enter the length : </Text>
                {errors && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
              </View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("passwordLength")}
                value={values.passwordLength}
                placeholder="Eg: 8"
                placeholderTextColor="#dac7c7ff"
              />
            </View>
            <CheckboxWithLabel
              checkboxBg="blue"
              labelText="Includes lower case character : "
              state={lowerCase}
              setState={setLowerCase}
            />
            <CheckboxWithLabel
              checkboxBg="red"
              labelText="Includes upper case character : "
              state={upperCase}
              setState={setUpperCase}
            />
            <CheckboxWithLabel
              checkboxBg="orange"
              labelText="Includes numbers : "
              state={numbers}
              setState={setNumbers}
            />
            <CheckboxWithLabel
              checkboxBg="gray"
              labelText="Includes special character : "
              state={special}
              setState={setSpecial}
            />
            <View style={styles.btnContainer}>
              <CustomButton
                btnText="Generate"
                btnStyle={styles.submitBtm}
                handlePress={() => handleSubmit()}
              />
              <CustomButton
                btnText="Reset"
                isGenerated={isGenerated}
                btnStyle={styles.resetBtn}
                handlePress={() => {
                  handleReset();
                  resetForm();
                }}
              />
            </View>
            <Result isGenerated={isGenerated} password={password} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  input: {
    borderColor: "#928787ff",
    borderWidth: 1,
    width: 80,
    color: "#FFFFFF",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  submitBtm: {
    backgroundColor: "#27b456ff",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    maxWidth: 180,
  },
  resetBtn: {
    backgroundColor: "#ff0000ff",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 20,
  },
});
