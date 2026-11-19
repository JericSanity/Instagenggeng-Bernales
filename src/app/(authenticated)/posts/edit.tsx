import Button from '@/src/components/button'
import Input from '@/src/components/input'
import axios from 'axios'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

const API_URL = 'https://6af3f9fe55a1de7dcf03745a.mockapi.io/api/products/items'

export default function EditPost() {
    const { id } = useLocalSearchParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/${id}`)
                setName(data.name)
                setDescription(data.description)
                setImage(data.image)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    const updatePost = async () => {
        try {
            await axios.put(`${API_URL}/${id}`, { name, description, image })
            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View className='p-6 gap-4'>
            <Input label='Name' value={name} onChangeText={setName} />
            <Input label='Description' value={description} onChangeText={setDescription} />
            <Input label='Image Url' value={image} onChangeText={setImage} />
            <Button label='Update Post' onPress={updatePost} />
        </View>
    )
}
