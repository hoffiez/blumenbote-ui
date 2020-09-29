import React, { useEffect } from 'react'
import {
  Messages as MessagesController,
  useLanguage
} from 'ordering-components'
import { useForm } from 'react-hook-form'
import {
  MessagesContainer,
  HeaderProfile,
  Image,
  Chat,
  BubbleCustomer,
  BubbleBusines,
  MessageBusiness,
  MessageCustomer,
  SendForm,
  Send,
  MessageConsole,
  BubbleConsole
} from './styles'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { BsCardImage, FiSend } from 'react-icons/all'
import moment from 'moment'

export const MessagesUI = (props) => {
  const {
    order,
    messages,
    canRead,
    handleSend,
    setCanRead,
    image,
    sendMessage,
    setImage,
    setMessage
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const removeImage = (e) => {
    const input = document.getElementById('chat_image')
    input.value = ''
    setImage(null)
  }

  const handleCanRead = e => {
    setCanRead({
      ...canRead,
      [e.target.name]: e.target.checked
    })
  }

  const onChangeImage = e => {
    const files = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(files)
    reader.onload = () => {
      setImage(reader.result)
    }
    reader.onerror = error => {
      console.log(error)
    }
  }

  const getRole = (level) => {
    switch (level) {
      case 0:
        return 'admin'
      case 2:
        return 'business'
      case 4:
        return 'driver'
      default:
        return 'Customer'
    }
  }

  const getStatus = (status) => {
    switch (status) {
      case 0:
        return 'ORDER_STATUS_PENDING'
      case 1:
        return 'ORDERS_COMPLETED'
      case 2:
        return 'ORDER_REJECTED'
      case 3:
        return 'ORDER_STATUS_IN_BUSINESS'
      case 4:
        return 'ORDER_READY'
      case 5:
        return 'ORDER_REJECTED_RESTAURANT'
      case 6:
        return 'ORDER_STATUS_CANCELLEDBYDRIVER'
      case 7:
        return 'ORDER_STATUS_ACCEPTEDBYRESTAURANT'
      case 8:
        return 'ORDER_CONFIRMED_ACCEPTED_BY_DRIVER'
      case 9:
        return 'ORDER_PICKUP_COMPLETED_BY_DRIVER'
      case 10:
        return 'ORDER_PICKUP_FAILED_BY_DRIVER'
      case 11:
        return 'ORDER_DELIVERY_COMPLETED_BY_DRIVER'
      case 12:
        return 'ORDER_DELIVERY_FAILED_BY_DRIVER'
      default:
        return status
    }
  }

  const onSubmit = async () => {
    handleSend()
    setImage('')
    setMessage('')
  }

  return (
    <MessagesContainer>
      <HeaderProfile>
        <Image>
          <img src={order.business?.logo} />
        </Image>
        <div>
          <p>{order.business?.name}</p>
          <p>Online</p>
        </div>
      </HeaderProfile>
      {!messages.loading ? (
        <Chat>
          <MessageConsole>
            <BubbleConsole>
            Order placed for {order.created_at} via {order.app_id}
              <p>{moment(order.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()}</p>
            </BubbleConsole>
          </MessageConsole>
          {messages?.messages.map((message) => (
            <MessageConsole key={message.id}>
              {message.type === 1 && (
                message.change?.attribute !== 'driver_id' ? (
                  <BubbleConsole>
                  Order <strong>{message.change.attribute} </strong> Changed from {' '}
                    {message.change.old !== null && (
                      <>
                        <strong>{t(getStatus(parseInt(message.change.old, 10)))} </strong>
                      </>
                    )}
                    <> to {t(getStatus(parseInt(message.change.new, 10)))} </>
                    <p>
                      {
                        moment(message.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()
                      }
                    </p>
                  </BubbleConsole>
                ) : (
                  <BubbleConsole>
                    <strong>{message.driver.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong> was assigned as driver {message.comment && (<><br /> {message.comment.length}</>)}
                    <p>{moment(message.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()}</p>
                  </BubbleConsole>
                )
              )}
            </MessageConsole>
          ))}
          {messages?.messages.map((message) => (
            <React.Fragment key={message.id}>
              {message.type === 2 && (
                <MessageCustomer>
                  <BubbleCustomer>
                    {message.comment}
                    <p>{moment(message.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()}</p>
                  </BubbleCustomer>
                </MessageCustomer>
              )}
              {message.type === 3 && (
                <MessageCustomer>
                  {message.comment && (
                    <BubbleCustomer>
                      {message.comment}
                      <p>{moment(message.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()}</p>
                    </BubbleCustomer>
                  )}
                  <BubbleCustomer>
                    <img src={message.source} width='200px' height='150px' />
                    <p>{moment(message.created_at, 'YYYY-MM-DD hh:mm:ss').fromNow()}</p>
                  </BubbleCustomer>
                </MessageCustomer>
              )}
            </React.Fragment>
          ))}
        </Chat>
      ) : (
        <span>Loading Messages...</span>
      )}
      <SendForm>
        <div>
          <input name='business' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.business} />
          <label>Business</label>
          <input name='administrator' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.administrator} />
          <label>Administrator</label>
          <input name='driver' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.driver} />
          <label>Driver</label>
        </div>
        <Send onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            placeholder='Write a message'
            onChange={onChangeMessage}
            name='message'
            ref={register({
              required: !image ? 'Write something' : false
            })}
          />
          <label for='chat_image'>
            <input
              type='file'
              name='image'
              id='chat_image'
              accept='image/png,image/jpg,image/jpeg'
              onChange={onChangeImage}
            />
            <BsCardImage />
          </label>
          {image && (
            <Button circle onClick={removeImage} name='delete'>
            X
            </Button>
          )}
          <Button
            color={(errors.message?.message && !image) ? 'secondary' : 'primary'}
            type='submit'
            disabled={(errors.message?.message && !image)}
          >
            <FiSend />
          Send
          </Button>
          {sendMessage.loading && <span> Sending Message...</span>}
          {sendMessage.error && (
            <>
              <br />
              <span style={{ color: 'red' }}>{sendMessage.error}</span>
            </>
          )}
        </Send>
      </SendForm>

    </MessagesContainer>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
