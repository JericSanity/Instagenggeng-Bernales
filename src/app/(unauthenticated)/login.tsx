
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, Text, View, StatusBar } from 'react-native'

const STATIC_EMAIL = 'test'
const STATIC_PASSWORD = 'password'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      router.replace('/home')
    } else {
      Alert.alert('Login Failed', 'Invalid email or password')
    }
  }

  return (
    <View className="flex-1 bg-[#1f1f1f]">
      <StatusBar barStyle="light-content" backgroundColor="#0c1013" />

      {/* Header */}
      <View className="h-[92px] bg-[#0c1013] items-center justify-center border-b border-[#292929]">
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            borderWidth: 4,
            borderColor: '#d62976',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 23,
              height: 23,
              borderRadius: 8,
              borderWidth: 3,
              borderColor: '#f77737',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fccc63',
              }}
            />
          </View>
        </View>
      </View>

      {/* Login Form */}
      <View className="flex-1 px-[42px] pt-[52px]">

        {/* Title */}
        <View className="flex-row items-center mb-6">
          <Text className="text-white text-3xl mr-5"></Text>
          <Text className="text-white text-sm font-bold">
            Log into Instagram
          </Text>
        </View>

        {/* Email Input */}
        <Input
          label=""
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Mobile number, username or email"
        />

        {/* Password Input */}
        <Input
          label=""
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Password"
        />

        {/* Login Button */}
        <View className="mt-2">
          <Button label="Log in" onPress={handleLogin} />
        </View>

      </View>
    </View>
  )
}
