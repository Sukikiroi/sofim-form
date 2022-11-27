import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon, ChatIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'




import React from 'react'
import { Image } from '@chakra-ui/react'
import supabase from '../supabase.config'


const CompletionForm = ({ fullname, email, numero, address }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  
  const Inscription = async () => {
    const { data, error } = await supabase
    .from('sofim_contact')
    .insert([
      { email: email, fullname: fullname, numero:numero, address: address },
    ])
  }






  return (
    <>

      <Button onClick={() => { onOpen(); Inscription() }} bg="#2C9BC8" color="white" mt={"65px"} fontSize="12px">
        Inscription Sofim pharmaceutique < EditIcon ml={2} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>   </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="https://img.freepik.com/premium-vector/survey-checklist-form-complete-task-list-laptop-illustration-successful-result_399089-637.jpg?w=2000" />
          </ModalBody>

          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CompletionForm