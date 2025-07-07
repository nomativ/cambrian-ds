import { Button, Card, Flex, Text, Heading, Box } from '@radix-ui/themes'

export default function Home() {
  return (
    <Box p="6">
      <Flex direction="column" gap="4" maxWidth="400px">
        <Heading size="6">Welcome to Radix Themes</Heading>
        <Text>This is a test of Radix Themes with Next.js and TypeScript.</Text>

        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">Sample Card</Heading>
            <Text>This card demonstrates Radix Themes components.</Text>
            <Button>Click me</Button>
          </Flex>
        </Card>

        <Flex gap="2">
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
