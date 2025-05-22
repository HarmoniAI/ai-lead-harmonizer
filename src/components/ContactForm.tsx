
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    segment: '',
    expectations: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSegmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      segment: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.company || !formData.segment) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      console.log('Enviando dados do formulário:', formData);
      
      // Here you would integrate with n8n webhook
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados com sucesso. Nossa equipe entrará em contato em breve!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        segment: '',
        expectations: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Pronto para revolucionar sua prospecção?
        </h3>
        <p className="text-gray-600">
          Preencha o formulário e descubra como nossa IA pode transformar seus resultados
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
              className="border-gray-300 focus:border-harmoni-blue"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
              className="border-gray-300 focus:border-harmoni-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="(00) 90000-0000"
              required
              className="border-gray-300 focus:border-harmoni-blue"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nome da empresa *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Sua empresa"
              required
              className="border-gray-300 focus:border-harmoni-blue"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="segment">Segmento que deseja prospectar *</Label>
          <Select onValueChange={handleSegmentChange} value={formData.segment}>
            <SelectTrigger className="border-gray-300 focus:border-harmoni-blue">
              <SelectValue placeholder="Selecione o segmento" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200">
              <SelectItem value="restaurantes">Restaurantes</SelectItem>
              <SelectItem value="clinicas">Clínicas Médicas</SelectItem>
              <SelectItem value="imobiliarias">Imobiliárias</SelectItem>
              <SelectItem value="escritorios">Escritórios de Advocacia</SelectItem>
              <SelectItem value="saloes">Salões de Beleza</SelectItem>
              <SelectItem value="academias">Academias</SelectItem>
              <SelectItem value="escolas">Escolas Particulares</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="servicos">Prestadores de Serviços</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations">O que você espera que uma empresa de automação com I.A. faça por você?</Label>
          <Textarea
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleInputChange}
            placeholder="Conte-nos sobre suas expectativas e desafios atuais na prospecção..."
            rows={4}
            className="border-gray-300 focus:border-harmoni-blue resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-harmoni-blue to-harmoni-blue-dark hover:from-harmoni-blue-dark hover:to-harmoni-blue text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            "🚀 Quero gerar mais oportunidades com IA"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
