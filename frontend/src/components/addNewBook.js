import { Button, Form, Input } from 'antd'
import React from 'react'

const AddNewBook = () => {
  return (
    <div className="w-1/2 m-auto py-6 flex flex-col gap-2 border-gray-500">
        <div className="flex flex-col gap-2">
            <Button type='default' className='' >Book List</Button>
            <h2 className='m-auto w-1/2 text-2xl text-white'>Add Book</h2>
            <Form layout='vertical' className="flex flex-col gap-2">
                <Form.Item name="title"><Input placeholder='Title of the book' className="p-1 w-full" style={{width: '100%'}}/></Form.Item>
                <Form.Item name="isbn" ><Input placeholder='ISBN' className="p-1 w-full"/></Form.Item>
                <Form.Item name="author" ><Input placeholder='Author' className="p-1 w-full"/></Form.Item>
                <Form.Item name="describe this book" ><Input placeholder='Describe this book' className="p-1 w-full"/></Form.Item>
                <Form.Item name="published date" ><Input placeholder='Published date' className="p-1 w-full"/></Form.Item>
                <Form.Item name="publisher of this book" ><Input placeholder='Publisher of this Book' className="p-1 w-full"/></Form.Item>
            </Form>

        </div>
    </div>
  )
}

export default AddNewBook