import { useMutation, useQueryClient } from "react-query";
import { createForm } from "../services";

interface createFormData {
  values: {
    name: string;
  };
}
export default function useCreateForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, mutateAsync } = useMutation(
    async (data: createFormData) => await createForm(data),
    {
      onSuccess: () => queryClient.invalidateQueries("forms"),
    }
  );
  return { mutate, isLoading, isSuccess, mutateAsync };
}
