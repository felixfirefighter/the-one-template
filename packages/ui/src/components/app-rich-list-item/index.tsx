import { Avatar, Box, Flex } from "@mantine/core"
import React from "react"
import { AppText } from "../app-text"

interface Props {
  avatarSrc: string | null
  title?: string
  subtitle?: string
  suffix?: string
}

export const AppRichListItem: React.FC<Props> = ({ avatarSrc, title, subtitle, suffix }) => {
  return <Flex>
    <Avatar src={avatarSrc}/>
    <Box>
      <AppText>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </Box>
    <AppText>{suffix}</AppText>
  </Flex>
}