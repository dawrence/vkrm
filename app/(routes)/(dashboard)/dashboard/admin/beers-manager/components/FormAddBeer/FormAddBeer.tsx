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
      brewery: "",
      style: "",
      family: "",
      tp: "",
      categories: "",
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

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 relative"
      >
        <div className="grid gap-2 lg:grid-cols-2 grid-cols-2 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la cerveza</FormLabel>
                <FormControl>
                  <Input placeholder="Club colombia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brewery"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la marca" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="family"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Familia: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la familia de la cerveza" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Ale">Ale</SelectItem>
                    <SelectItem value="Lager">Lager</SelectItem>
                    <SelectItem value="Lambic">Lambic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cual es el estilo de la cerveza</FormLabel>
                <FormControl>
                  <Input placeholder="Belgian white fruit..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de presentacion: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de presentacion..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Botella">Botella</SelectItem>
                    <SelectItem value="Lata">Lata</SelectItem>
                    <SelectItem value="Barril">Barril</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categorias: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la categoria de la cerveza" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Importadas">Importadas</SelectItem>
                    <SelectItem value="Nacionales">Nacionales</SelectItem>
                    <SelectItem value="Artesanales">Artesanales</SelectItem>
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
                <FormLabel>Grado de alcohol</FormLabel>
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
                <FormLabel>Seleccione el nivel de amargor: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Nivel de amargor..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Bajo">Bajo</SelectItem>
                    <SelectItem value="Medio">Medio</SelectItem>
                    <SelectItem value="Alto">Alto</SelectItem>
                  </SelectContent>
                </Select>
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
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input placeholder="15000" type="number" {...field} />
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
                <FormLabel>Origen</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione el origen" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Belgica">Belgica</SelectItem>
                    <SelectItem value="Alemania">Alemania</SelectItem>
                    <SelectItem value="Escocia">Escocia</SelectItem>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                    <SelectItem value="España">España</SelectItem>
                    <SelectItem value="Inglaterra">Inglaterra</SelectItem>
                    <SelectItem value="Republica checa">Republica checa</SelectItem>
                    <SelectItem value="EEUU">EEUU</SelectItem>
                    <SelectItem value="Francia">Francia</SelectItem>
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
                <FormLabel>Imagen de cerveza</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p className="text-sm">Imagen subida con exito!</p>
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
          Crear cerveza
        </Button>
      </form>
    </Form>
  );
}
