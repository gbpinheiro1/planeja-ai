export interface ChatEntry {
  actor: "user" | "a.i"
  message: string
}

const CHAT_STORAGE_PREFIX = "chat-history"

export const useChatStorage = () => {
  const getStorageKey = (simulationId: string) =>
    `${CHAT_STORAGE_PREFIX}-${simulationId}`

  const getChatHistory = (simulationId: string): ChatEntry[] => {
    const storage = localStorage.getItem(getStorageKey(simulationId))

    if (!storage) {
      return []
    }

    try {
      return JSON.parse(storage) as ChatEntry[]
    } catch {
      return []
    }
  }

  const saveChatHistory = (simulationId: string, history: ChatEntry[]) => {
    localStorage.setItem(getStorageKey(simulationId), JSON.stringify(history))
  }

  const clearChatHistory = (simulationId: string) => {
    localStorage.removeItem(getStorageKey(simulationId))
  }

  return { getChatHistory, saveChatHistory, clearChatHistory }
}
