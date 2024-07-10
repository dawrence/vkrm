"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddBeer.form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { FormAddCarProps } from "./FormAddbBeer.types";

import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function FormAddBeer(props: FormAddCarProps) {
  const { setOpenDialog } = props;
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      type: "",
      abv: "",
      ibu: "",
      volume: "",
      price: "",
      origin: "",
      photo: "",
      isPublish: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);
    try {
      await axios.post(`/api/beer`, values);
      toast({
        title: "Beer created ✅",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const { isValid } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
        <div className="grid gap-2 lg:grid-cols-2 grid-cols-2 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beer name</FormLabel>
                <FormControl>
                  <Input placeholder="Club colombia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Bavaria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of beer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Lager">Lager</SelectItem>
                    <SelectItem value="Ipa">Ipa</SelectItem>
                    <SelectItem value="Rubia">Rubia</SelectItem>
                    <SelectItem value="Negra">Negra</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="abv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ABV</FormLabel>
                <FormControl>
                  <Input placeholder="4.5" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ibu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IBU</FormLabel>
                <FormControl>
                  <Input placeholder="30" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="volume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volumen</FormLabel>
                <FormControl>
                  <Input placeholder="330" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="1500" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origin</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the origin of beer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Belgica">Belgica</SelectItem>
                    <SelectItem value="Alemania">Alemania</SelectItem>
                    <SelectItem value="Escocia">Escocia</SelectItem>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beer image</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p className="text-sm">Image uploaded</p>
                  ) : (
                    <UploadButton
                      className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                      {...field}
                      endpoint="photo"
                      onClientUploadComplete={(res) => {
                        form.setValue("photo", res?.[0].url);
                        setPhotoUploaded(true);
                      }}
                      onUploadError={(error: Error) => {
                        console.error(error);
                      }}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={!isValid}>
          Create beer
        </Button>
      </form>
    </Form>
  );
}
