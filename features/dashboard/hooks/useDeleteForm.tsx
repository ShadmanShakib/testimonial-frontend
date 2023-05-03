import { useMutation, useQueryClient } from "react-query";
import { deleteForm } from "../services";

export default function useDeleteForm(id: string) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => deleteForm(id), {
    onSuccess: () => queryClient.invalidateQueries("forms"),
  });
  return { mutate, isLoading };
}
