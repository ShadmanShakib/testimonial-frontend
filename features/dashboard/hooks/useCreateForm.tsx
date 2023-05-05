import { useMutation, useQueryClient } from "react-query";
import { createForm } from "../services";
import { useRouter } from "next/router";
interface createFormData {
  values: {
    name: string;
  };
}
export default function useCreateForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLoading, mutateAsync, data, isSuccess } = useMutation(
    async (dataX: createFormData) => await createForm(dataX),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("forms");
      },
    }
  );
  return { isLoading, mutateAsync, data, isSuccess };
}
